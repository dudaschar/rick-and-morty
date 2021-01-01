import React from 'react';

import { fireEvent, render, screen } from 'src/testUtils/testUtils';

import Home from './Home';

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

const useRouter = jest.spyOn(require("next/router"), "useRouter");

describe('Home container', () => {
  it('should have an input and a button', () => {
    render(<Home />);

    expect(screen.queryByPlaceholderText('type here...')).toBeTruthy();
    expect(screen.queryByRole('button')).toBeTruthy();
  });

  it('should start with the button disabled and enable after typing', () => {
    render(<Home />);

    expect(screen.getByRole('button').disabled).toBe(true);

    fireEvent.change(screen.getByPlaceholderText('type here...'), {
      target: { value: 'Rick' }
    })
    expect(screen.getByRole('button').disabled).toBe(false);
  });

  it('should call a function when click on the search button', () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));

    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText('type here...'), {
      target: { value: 'Rick' }
    })
    fireEvent.click(screen.getByRole('button'))

    expect(useRouter).toHaveBeenCalled();
  });

  it('should call a function when press enter key', () => {
    useRouter.mockImplementation(() => ({
      push: jest.fn(),
    }));
    render(<Home />);

    const input = screen.getByPlaceholderText('type here...');

    fireEvent.keyPress(input, { target: { value: 'Rick' } });
    fireEvent.click(input, { key: "Enter", code: 13, charCode: 13 });

    expect(useRouter).toHaveBeenCalled();
  });
})