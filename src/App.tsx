import React from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

type State = {
  marked: string | null;
};

type Props = {};

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export class App extends React.Component<Props, State> {
  state: State = {
    marked: 'Jam',
  };

  render() {
    return (
      <main className="section container">
        <h1 className="title is-flex is-align-items-center">
          {this.state.marked !== null ? (
            <>
              {this.state.marked} is selected
              <button
                data-cy="ClearButton"
                type="button"
                className="delete ml-3"
                onClick={() => this.setState({ marked: null })}
              />
            </>
          ) : (
            'No goods selected'
          )}
        </h1>

        <table className="table">
          <tbody>
            {goods.map(good => {
              return (
                <tr
                  key={good}
                  data-cy="Good"
                  className={
                    good === this.state.marked
                      ? 'has-background-success-light'
                      : ''
                  }
                >
                  <td>
                    <button
                      data-cy={
                        good === this.state.marked
                          ? 'RemoveButton'
                          : 'AddButton'
                      }
                      type="button"
                      className={
                        good === this.state.marked ? 'button is-info' : 'button'
                      }
                      onClick={() =>
                        good === this.state.marked
                          ? this.setState({ marked: null })
                          : this.setState({ marked: `${good}` })
                      }
                    >
                      {good === this.state.marked ? '-' : '+'}
                    </button>
                  </td>

                  <td data-cy="GoodTitle" className="is-vcentered">
                    {good}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    );
  }
}
