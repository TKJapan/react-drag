const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: '掃除をする' },
        'task-2': { id: 'task-2', content: '洗濯をする' },
        'task-3': { id: 'task-3', content: '買い物をする' },
        'task-4': { id: 'task-4', content: '料理をする' },
        'task-5': { id: 'task-5', content: '運動をする' },
    },
    columns: {
        'column-1': {
        id: 'column-1',
        title: 'To do',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5' ],
        },
    },
    columnOrder: ['column-1'],
};

export default initialData;