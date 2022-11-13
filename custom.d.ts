import { ObjectId } from 'mongodb'

declare global {
    interface MacroItem {
        _id?: ObjectId;
        food: string;
        amount: number;
        calories: number;
        protein: number;
    }
}