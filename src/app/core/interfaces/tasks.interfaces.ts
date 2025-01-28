import { FormControl } from "@angular/forms";

export interface Task {
  id: string;
  title: string;
  detail: string;
  estimatedDate: Date;
  completed: boolean;
}

export interface CreateTask {
  id: FormControl<string | null>;
  title: FormControl<string | null>;
  detail: FormControl<string | null>;
  estimatedDate: FormControl<Date | null>;
  completed: FormControl<boolean | null>;
}
