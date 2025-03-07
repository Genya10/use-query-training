export interface ITodo {
    id:number,
    userId:number,
    title:string,
    completed: boolean
}

export interface ICreateTodo extends Omit<ITodo,'id'>{}