import React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { ChatContainer } from '@carbon/ai-chat';

describe('ChatContainer', () => {
  it('should match snapshot', async () => {
    let container: HTMLElement;

    await act(async () => {
      const result = render(
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
      );
      container = result.container;
    });

    // Wait for the web component's slot divs to be rendered
    await waitFor(
      () => expect(container.querySelector("cds-aichat-react")?.querySelector("div")).toBeInTheDocument(),
      { timeout: 10000 }
    );

    expect(container!.firstChild).toMatchSnapshot();
  }, 60000);
});