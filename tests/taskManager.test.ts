import { TaskManager } from "../src/taskManager";

describe("TaskManager", () => {
    let taskManager: TaskManager;

    beforeEach(() => {
        taskManager = new TaskManager();
    });

    it("debería agregar una task a la lista", () => {
        const task = taskManager.addTask("Do laundry");
        expect(taskManager.getTasks()).toContain(task);
    });

    it("debería marcar una task como completada", () => {
        const task = taskManager.addTask("Do laundry");
        taskManager.markTaskAsCompleted(task.id);
        expect(task.completed).toBe(true);
    });

    it("debería borrar una task de la lista", () => {
        const task = taskManager.addTask("Do laundry");
        taskManager.removeTask(task.id);
        expect(taskManager.getTasks()).not.toContain(task);
    });
});