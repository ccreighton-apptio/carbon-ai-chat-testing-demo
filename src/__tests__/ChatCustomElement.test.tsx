import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { ChatCustomElement } from '@carbon/ai-chat';

describe('ChatCustomElement', () => {
  it('should match snapshot', async () => {
    const { container } = await act(() =>
      render(
        <ChatCustomElement
          config={{
            messaging: {
              customSendMessage(request, requestOptions, instance) {
                console.log("customSendMessage");
              },
            }
          }}
          className="custom-chat-element"
          data-testid="chat-custom-element"
        />
      )
    );
    
    await waitFor(() => expect(container.querySelector("cds-aichat-react")?.querySelector("div")).toBeInTheDocument()).then(() =>
      expect(container.firstChild).toMatchSnapshot()
    );
  }, 60000);
});