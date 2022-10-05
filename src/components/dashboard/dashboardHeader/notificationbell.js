import React from "react";
import MagicBell, {
  FloatingNotificationInbox
} from "@magicbell/magicbell-react";

export default function Bell() {
  const handleAllRead = () => console.warn("handleAllRead");

  return (
      <div>
        <MagicBell
          serverURL="https://api.magicbell.dev"
          apiKey="b0ff0bfc5cf159e6f5daa3f6b7c390eda4e5a69e"
          userEmail="litorojose1@gmail.com"
          bellCounter="unread"
        >
          {(props) => (
            <FloatingNotificationInbox
              onNotificationClick={(notification) => console.log(notification)}
              onAllRead={handleAllRead}
              height={600}
              width={500}
              {...props}
            />
          )}
        </MagicBell>
      </div>
  );
}