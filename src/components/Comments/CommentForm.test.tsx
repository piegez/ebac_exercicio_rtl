import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CommentForm from '../CommentForm';

test('inserir dois comentários', () => {
  render(<CommentForm />);

  const commentInput = screen.getByTestId('comment-input') as HTMLInputElement;
  const submitButton = screen.getByTestId('submit-button') as HTMLButtonElement;


  fireEvent.change(commentInput, { target: { value: 'Primeiro comentario' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();


  fireEvent.change(commentInput, { target: { value: 'Segundo comentario' } });
  fireEvent.click(submitButton);

  expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
});
