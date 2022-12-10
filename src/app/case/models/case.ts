import {Priority} from "../../core/select-list/models/priority";

export class Case {
  id: number;
  name: string;
  isComplete: boolean;
  priority: Priority;
  description: string;
}
