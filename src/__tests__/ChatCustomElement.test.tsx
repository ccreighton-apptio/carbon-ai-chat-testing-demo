import React from 'react';
import { render } from '@testing-library/react';
import { ChatCustomElement } from '@carbon/ai-chat';

describe('ChatCustomElement', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ChatCustomElement
        config={{}}
        className="custom-chat-element"
        data-testid="chat-custom-element"
      />
    );
    
    expect(container.firstChild).toMatchSnapshot();
  });
});