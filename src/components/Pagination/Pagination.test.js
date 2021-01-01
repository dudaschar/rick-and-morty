import React from 'react';
import { fireEvent, render, screen } from 'src/testUtils/testUtils';

import Pagination from './Pagination';

describe('Pagination Component', () => {
  it('should render properly', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 100,
      next: 'https://api.next.com',
      pages: 5,
      prev: 'https://api.prev.com',
    }

    const { asFragment } = render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('should call a function when clicking on control buttons', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 100,
      next: 'https://api.next.com',
      pages: 5,
      prev: 'https://api.prev.com',
    }

    render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );

    fireEvent.click(screen.getByText('Previous'));
    expect(onPrevMock).toHaveBeenCalledTimes(1);

    fireEvent.click(screen.getByText('Next'));
    expect(onNextMock).toHaveBeenCalledTimes(1);
  });
  it('should disable Previous button if it is the first page', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 100,
      next: 'https://api.next.com',
      pages: 5,
      prev: null,
    };

    render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );
    
    expect(screen.getByText('Previous').disabled).toBe(true);
    expect(screen.getByText('Next').disabled).toBe(false);
  });
  it('should disable Next button if it is the last page', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 100,
      next: null,
      pages: 5,
      prev: 'https://api.prev.com',
    };

    render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );
    
    expect(screen.getByText('Previous').disabled).toBe(false);
    expect(screen.getByText('Next').disabled).toBe(true);
  });
  it('should disable both buttons if it has only one page', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 18,
      next: null,
      pages: 1,
      prev: null,
    };

    render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );
    
    expect(screen.getByText('Previous').disabled).toBe(true);
    expect(screen.getByText('Next').disabled).toBe(true);
  });
  it('should enable both buttons if it has prev and next pages', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 100,
      next: 'https://api.next.com',
      pages: 5,
      prev: 'https://api.prev.com',
    };

    render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );
    
    expect(screen.getByText('Previous').disabled).toBe(false);
    expect(screen.getByText('Next').disabled).toBe(false);
  });
  it('should display correctly the current page', () => {
    const onNextMock = jest.fn();
    const onPrevMock = jest.fn();
    const props = {
      count: 100,
      next: 'https://api.next.com',
      pages: 5,
      prev: null,
    };

    const { rerender } = render(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={props}
      />
    );

    expect(screen.getByText('Page 1 of 5')).toBeTruthy();

    rerender(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={{
          count: 100,
          next: 'https://api.next.com/?page=3',
          pages: 5,
          prev: 'https://api.prev.com/?page=1'
        }}
      />
    );

    expect(screen.getByText('Page 2 of 5')).toBeTruthy();

    rerender(
      <Pagination
        onNext={onNextMock}
        onPrev={onPrevMock}
        charactersInfo={{
          count: 100,
          next: null,
          pages: 5,
          prev: 'https://api.prev.com/?page=4'
        }}
      />
    );

    expect(screen.getByText('Page 5 of 5')).toBeTruthy();
  });
});