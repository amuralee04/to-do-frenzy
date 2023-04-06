import mongoose from 'mongoose';
import Todo from '../models/todos.js';

export const readTodos = async(req,res) => {

    try {
        const todos =  await Todo.find();
        res.Status(200).json(todos);
    } catch (error) {
        res.Status(404).json({ error: error.message});
    }

}

export const createTodos = async(req,res) => {
    const todo = new Todo(req.body);
    try {
        await todo.save();
        res.Status(201).json(todo);
    } catch (error) {
        res.Status(409).json({ error: error.message});
    }

}