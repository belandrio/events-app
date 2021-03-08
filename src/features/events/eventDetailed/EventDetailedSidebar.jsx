import React from 'react'
import { Segment, Item, ItemGroup, ItemImage, ItemContent, ItemHeader } from 'semantic-ui-react';

export default function EventDetailedSidebar() {
        return (
          <>
            <Segment
              textAlign="center"
              style={{ border: "none" }}
              attached="top"
              secondary
              inverted
              color="teal"
            >
              2 People Going
            </Segment>
            <Segment attached>
              <ItemGroup relaxed divided>
                <Item style={{ position: "relative" }}>
                  <ItemImage size="tiny" src="/assets/user.png" />
                  <ItemContent verticalAlign="middle">
                    <ItemHeader as="h3">
                      <span>Tom</span>
                    </ItemHeader>
                  </ItemContent>
                </Item>
                <Item style={{ position: "relative" }}>
                  <ItemImage size="tiny" src="/assets/user.png" />
                  <ItemContent verticalAlign="middle">
                    <ItemHeader as="h3">
                      <span>Bela</span>
                    </ItemHeader>
                  </ItemContent>
                </Item>
              </ItemGroup>
            </Segment>
          </>
        );
}
