import { Action } from '../types';

export function playerCardSelect(id: string, type: string): Action {
  return {
    type,
    id,
  };
}
