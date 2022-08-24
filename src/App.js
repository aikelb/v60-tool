import { React, Component } from "react";
import {
  Container,
  Header,
  Grid,
  Tab,
  Divider,
  Form,
  Segment,
  Label
} from 'semantic-ui-react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coffee: 15,
      water: 250,
      ratio: 250 / 15
    }
  }

  panes = [
    {
      menuItem: 'Tetsu 4-6',
      render: () => this.tetsu(),
    },
    {
      menuItem: 'Hoffmann',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
    {
      menuItem: 'Onyx',
      render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane>,
    },
  ]

  tetsu() {
    let data = {
      target1: Math.round(0.4 * this.state.water),
      standard: [
        3 * this.state.coffee,
        0.4 * this.state.water - 3 * this.state.coffee
      ],
      sweet: [
        2 * this.state.coffee,
        0.4 * this.state.water - 2 * this.state.coffee
      ],
      bright: [
        4 * this.state.coffee,
        0.4 * this.state.water - 4 * this.state.coffee
      ],
      strong: Math.round(0.6 * this.state.water / 3),
      medium: Math.round(0.6 * this.state.water / 2),
      light: Math.round(0.6 * this.state.water)
    }

    data.standard = data.standard.map(e => Math.round(e));
    data.sweet = data.sweet.map(e => Math.round(e));
    data.bright = data.bright.map(e => Math.round(e));

    return (
      <Grid columns={3} stackable>

        <Grid.Column>
          <Segment.Group>
            <Segment color="teal" size="big">
              Standard
            </Segment>
            <Segment>
              <Label circular>
                1
                <Label.Detail>0:00</Label.Detail>
              </Label>
              <Label color="teal">
                {data.standard[0]}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
            <Segment>
              <Label circular>
                2
                <Label.Detail>0:45</Label.Detail>
              </Label>
              <Label>
                <Label.Detail>+</Label.Detail>
                {data.standard[1]}
              </Label>
              =
              <Label color="teal">
                {data.standard[0] + data.standard[1]}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment color="orange" size="big">
              Sweet
            </Segment>
            <Segment>
              <Label circular>
                1
                <Label.Detail>0:00</Label.Detail>
              </Label>
              <Label color="orange">
                {data.sweet[0]}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
            <Segment>
              <Label circular>
                2
                <Label.Detail>0:45</Label.Detail>
              </Label>
              <Label>
                <Label.Detail>+</Label.Detail>
                {data.sweet[1]}
              </Label>
              =
              <Label color="orange">
                {data.sweet[0] + data.sweet[1]}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment color="yellow" size="big">
              Bright
            </Segment>
            <Segment>
              <Label circular>
                1
                <Label.Detail>0:00</Label.Detail>
              </Label>
              <Label color="yellow">
                {data.bright[0]}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
            <Segment>
              <Label circular>
                2
                <Label.Detail>0:45</Label.Detail>
              </Label>
              <Label>
                <Label.Detail>+</Label.Detail>
                {data.bright[1]}
              </Label>
              =
              <Label color="yellow">
                {data.bright[0] + data.bright[1]}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Row columns={3}>
        <Grid.Column>
          <Segment.Group>
            <Segment color="red" size="big">
              Strong
            </Segment>
            <Segment>
              <Label circular>
                3
                <Label.Detail>1:30</Label.Detail>
              </Label>
              <Label>
              <Label.Detail>+</Label.Detail>
                {data.strong}
              </Label>
              =
              <Label color="red">
                {data.target1 + data.strong}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
            <Segment>
              <Label circular>
                4
                <Label.Detail>2:15</Label.Detail>
              </Label>
              <Label>
                <Label.Detail>+</Label.Detail>
                {data.strong}
              </Label>
              =
              <Label color="red">
              {data.target1 + data.strong * 2}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
            <Segment>
              <Label circular>
                5
                <Label.Detail>2:45</Label.Detail>
              </Label>
              <Label>
                <Label.Detail>+</Label.Detail>
                {data.strong}
              </Label>
              =
              <Label color="red">
                {data.target1 + data.strong*3}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        <Grid.Column>
          <Segment.Group>
            <Segment color="purple" size="big">
              Medium
            </Segment>
            <Segment>
              <Label circular>
                3
                <Label.Detail>1:30</Label.Detail>
              </Label>
              <Label>
              <Label.Detail>+</Label.Detail>
                {data.medium}
              </Label>
              =
              <Label color="purple">
                {data.target1 + data.medium}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
            <Segment>
              <Label circular>
                4
                <Label.Detail>2:15</Label.Detail>
              </Label>
              <Label>
                <Label.Detail>+</Label.Detail>
                {data.medium}
              </Label>
              =
              <Label color="purple">
              {data.target1 + data.medium * 2}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>

          <Grid.Column>
          <Segment.Group>
            <Segment color="olive" size="big">
              Light
            </Segment>
            <Segment>
              <Label circular>
                3
                <Label.Detail>1:30</Label.Detail>
              </Label>
              <Label>
              <Label.Detail>+</Label.Detail>
                {data.light}
              </Label>
              =
              <Label color="olive">
                {data.target1 + data.light}
                <Label.Detail>ml</Label.Detail>
              </Label>
            </Segment>
          </Segment.Group>
        </Grid.Column>

        </Grid.Row>
      </Grid>
    )
  }

  setCoffee(value) {
    this.setState({
      coffee: value,
      water: Math.round(value * this.state.ratio)
    });
  }

  setRatio(value) {
    this.setState({
      ratio: value,
      water: Math.round(value * this.state.coffee)
    });
  }

  setWater(value) {
    this.setState({
      water: value,
      ratio: value / this.state.coffee
    });
  }

  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <Header as='h1'>V60 Tool</Header>

        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Coffee' placeholder='Enter coffee amount' 
            value={this.state.coffee}
            onChange={(event) => this.setCoffee(event.target.value)}/>
          <Form.Input fluid label='Ratio' placeholder='Custom ratio' 
            value={this.state.ratio}
            onChange={(event) => this.setRatio(event.target.value)}/>
          <Form.Input fluid label='Water' placeholder='Enter water amount' 
            value={this.state.water}
            onChange={(event) => this.setWater(event.target.value)}/>
        </Form.Group>
        </Form>

        <Divider></Divider>
        <Tab menu={{ secondary: true }} panes={this.panes} />


      </Container>
    );
  }
}

export default App;