import React from 'react';
import { render } from '@testing-library/react';
import { ChatContainer } from '@carbon/ai-chat';

describe('ChatContainer', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ChatContainer
        config={{}}
        data-testid="chat-container"
      />
    );
    
    expect(container.firstChild).toMatchSnapshot();
  });
});