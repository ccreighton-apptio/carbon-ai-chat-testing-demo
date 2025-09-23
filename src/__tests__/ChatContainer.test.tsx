import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { ChatContainer } from '@carbon/ai-chat';

describe('ChatContainer', () => {
  it('should match snapshot', async () => {
    const { container } = await act(() =>
      render(
        <ChatContainer
          config={{
            messaging: {
              customSendMessage(request, requestOptions, instance) {
                console.log("customSendMessage");
              },
            }
          }}
          data-testid="chat-container"
        />
      )
    );
        
    await waitFor(() => expect(container.querySelector("cds-aichat-react")?.querySelector("div")).toBeInTheDocument()).then(() =>
      expect(container.firstChild).toMatchSnapshot()
    );
  }, 60000);
});