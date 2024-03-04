import { Task } from "./task";

export class TaskManager {
    private tasks: Task[] = [];
    private nextId: number = 1;

    addTask(description: string): Task {
        const task: Task = {
            id: this.nextId++,
            description,
            completed: false
        };
        this.tasks.push(task);
        return task;
    }

    markTaskAsCompleted(id: number): boolean {
        const taskIndex = this.findTaskIndex(id);
        if (taskIndex !== -1) {
            this.tasks[taskIndex].completed = true;
            return true;
        }
        return false;
    }

    removeTask(id: number): boolean {
        const taskIndex = this.findTaskIndex(id);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            return true;
        }
        return false;
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    private findTaskIndex(id: number): number {
        return this.tasks.findIndex(task => task.id === id);
    }
}