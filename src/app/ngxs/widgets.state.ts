import { Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { WidgetsAction } from './widgets.actions';

export interface WidgetsStateModel {
  items: string[];
}

@State<WidgetsStateModel>({
  name: 'widgets',
  defaults: {
    items: ['A', 'B', 'C']
  }
})
@Injectable()
export class WidgetsState {

  @Selector()
  static getState(state: WidgetsStateModel) {
    return state;
  }

  @Action(WidgetsAction)
  add(ctx: StateContext<WidgetsStateModel>, { payload }: WidgetsAction) {
    const stateModel = ctx.getState();
    stateModel.items = [...stateModel.items, payload];
    ctx.setState(stateModel);
  }
}
