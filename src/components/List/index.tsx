import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddTask from '../AddTask';
import Task from '../Task';
import Button from '../Button';

import {
  ListButtons,
  ListDescription,
  ListHeader,
  ListTitle,
  NoTasks,
} from './styles';

import { deleteList } from '../../slices/listsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { selectTasks } from '../../slices/tasksSlice';
import { Icons } from '../../constants/icons';

export interface IProps {
  id: string;
  title: string;
  description: string;
  active: boolean;
  index: number;
}

const List: React.FC<IProps> = ({ id, title, description, active, index }) => {
  const [createTaskOpen, setCreateTaskOpen] = useState<boolean>(false);
  const [expanded, setExpanded] = useState<boolean>(false);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const tasks = useAppSelector(selectTasks).filter(
    (task) => task.listId === id
  );

  const expandToggle = () => {
    setExpanded(!expanded);
  };

  const deleteListAction = () => {
    dispatch(deleteList(index));
  };

  const createTaskAction = () => {
    setCreateTaskOpen(true);
  };

  if (!active) {
    return null;
  }

  return (
    <>
      <ListHeader>
        <div>
          <ListTitle>{title}</ListTitle>
          <ListDescription>{description}</ListDescription>
        </div>

        <Button
          action={deleteListAction}
          label={t('deleteList')}
          icon={Icons.Trash}
          withMargin={false}
        />
      </ListHeader>
      <ListButtons>
        <Button
          action={expandToggle}
          label={expanded ? t('hideTasks') : t('seeTasks')}
          icon={expanded ? Icons.EyeClosed : Icons.EyeOpen}
          withMargin
        />
        {!createTaskOpen && (
          <Button
            action={createTaskAction}
            label={t('createTask')}
            icon={Icons.Clipboard}
            withMargin
          />
        )}
      </ListButtons>
      {createTaskOpen && (
        <AddTask
          listId={id}
          listTitle={title}
          onCloseButton={setCreateTaskOpen}
        />
      )}
      {expanded &&
        tasks.length > 0 &&
        tasks.map((task, index) => (
          <Task
            key={index}
            id={task.id}
            text={task.text}
            listId={task.listId}
            listTitle={task.listTitle}
            active={task.active}
          />
        ))}
      {expanded && !tasks.length && <NoTasks>{t('noTasks')}</NoTasks>}
    </>
  );
};

export default List;
