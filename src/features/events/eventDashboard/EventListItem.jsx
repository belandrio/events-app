import React from "react";
import {
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemImage,
  Segment,
  SegmentGroup,
  List,
  Button,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import EventListDescription from "./EventListDescription";
import EventListTitle from "./EventListTitle";

export default function EventListItem({ event, selectEvent, deleteEvent }) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <ItemImage size="tiny" circular src={event.hostPhotoUrl} />
            <ItemContent>
              <ItemHeader>
                <EventListTitle title={event.title} />
              </ItemHeader>
              <ItemDescription>{event.hostedBy}</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <Icon name="clock" /> {event.date}
        <Icon name="marker" />
        {event.location}
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <EventListDescription description={event.description} />
        <Button
          onClick={() => deleteEvent(event.id)}
          color="red"
          floated="right"
          content="Delete"
        />
        <Button
          onClick={() => selectEvent(event)}
          color="blue"
          floated="right"
          content="View"
        />
      </Segment>
    </SegmentGroup>
  );
}
