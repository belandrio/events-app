import React from "react";
import { Form, FormField, Segment, Header, Button } from "semantic-ui-react";

export default function EventForm({setFormOpen}) {
        return (
          <Segment clearing>
            <Header content="Create new event" />
            <Form>
              <FormField>
                <input type="text" placeholder="Event title" />
              </FormField>
              <FormField>
                <input type="text" placeholder="Category" />
              </FormField>
              <FormField>
                <input type="text" placeholder="Description" />
              </FormField>
              <FormField>
                <input type="text" placeholder="City" />
              </FormField>
              <FormField>
                <input type="text" placeholder="Location" />
              </FormField>
              <FormField>
                <input type="date" placeholder="Date" />
              </FormField>
              <Button type="submit" floated="right" positive content="Submit" />
              <Button onClick={()=> setFormOpen(false)} type="submit" floated="right" content="Cancel" />
            </Form>
          </Segment>
        );
}