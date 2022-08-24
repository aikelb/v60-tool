import { React, Component, useEffect } from "react";
import {
  Container,
  Header,
  Grid,
  Tab,
  Icon,
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

  componentDidMount() {
    document.title = "V60 Tool"
  }

  panes = [
    {
      menuItem: 'Tetsu 4-6',
      render: () => this.tetsuyaMethod(),
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

  tetsuStack = (title, color, steps) => <Grid.Column>
    <Segment.Group>
      <Segment color={color} size="big">
        {title}
      </Segment>

      {steps.map((step) =>
        <Segment>
          <Label circular>
            {step.number}
            <Label.Detail>{step.time}</Label.Detail>
          </Label>

          {'addAmount' in step && (
            <Label>
              <Label.Detail>+</Label.Detail>
              {step.addAmount}
            </Label>
          )}
          {'addAmount' in step && "="}
          <Label color={color}>
            {'addAmount' in step && (step.lastAmount + step.addAmount)}
            {'amount' in step && (step.amount)}
            <Label.Detail>ml</Label.Detail>
          </Label>
        </Segment>
      )}
    </Segment.Group>
  </Grid.Column>

  tetsuyaMethod() {
    const firstPart = 0.4 * this.state.water;
    const secondPart = 0.6 * this.state.water;
    let tetsuyaData = {
      standard: [
        {
          number: 1,
          time: '0:00',
          amount: 3 * this.state.coffee
        },
        {
          number: 2,
          time: '0:45',
          addAmount: Math.round(firstPart - 3 * this.state.coffee),
          lastAmount: Math.round(3 * this.state.coffee)
        }
      ],
      sweet: [
        {
          number: 1,
          time: '0:00',
          amount: Math.round(2 * this.state.coffee)
        },
        {
          number: 2,
          time: '0:45',
          addAmount: Math.round(firstPart - 2 * this.state.coffee),
          lastAmount: Math.round(2 * this.state.coffee)
        }
      ],
      bright: [
        {
          number: 1,
          time: '0:00',
          amount: Math.round(4 * this.state.coffee)
        },
        {
          number: 2,
          time: '0:45',
          addAmount: Math.round(firstPart - 4 * this.state.coffee),
          lastAmount: Math.round(4 * this.state.coffee)
        }
      ],
      strong: [
        {
          number: 3,
          time: '1:30',
          addAmount: Math.round(secondPart / 3),
          lastAmount: Math.round(firstPart)
        },
        {
          number: 4,
          time: '2:15',
          addAmount: Math.round(secondPart / 3),
          lastAmount: Math.round(firstPart + secondPart / 3)
        },
        {
          number: 5,
          time: '2:45',
          addAmount: Math.round(secondPart / 3),
          lastAmount: Math.round(firstPart + secondPart / 3 * 2)
        }
      ],
      medium: [
        {
          number: 3,
          time: '1:30',
          addAmount: Math.round(secondPart / 2),
          lastAmount: Math.round(firstPart)
        },
        {
          number: 4,
          time: '2:15',
          addAmount: Math.round(secondPart / 2),
          lastAmount: Math.round(firstPart + secondPart / 2)
        }
      ],
      light: [
        {
          number: 3,
          time: '1:30',
          addAmount: Math.round(secondPart),
          lastAmount: Math.round(firstPart)
        }
      ]
    }

    return (<span>
      <Grid columns={3} stackable>
        {this.tetsuStack("Standard", "teal", tetsuyaData.standard)}
        {this.tetsuStack("Sweet", "orange", tetsuyaData.sweet)}
        {this.tetsuStack("Bright", "yellow", tetsuyaData.bright)}
      </Grid>
      <Divider horizontal> <Icon name="expand arrows alternate" /></Divider>
      <Grid columns={3} stackable>
        {this.tetsuStack("Strong", "red", tetsuyaData.strong)}
        {this.tetsuStack("Medium", "purple", tetsuyaData.medium)}
        {this.tetsuStack("Light", "olive", tetsuyaData.light)}
      </Grid></span>
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
            <Form.Input fluid label='Coffee' placeholder='Coffee amount' labelPosition='right'
              value={this.state.coffee}
              onChange={(event) => this.setCoffee(event.target.value)}>
                <input />
                <Label>gr</Label>
            </Form.Input>
            <Form.Input fluid label='Ratio' placeholder='Custom ratio'
              value={this.state.ratio}
              onChange={(event) => this.setRatio(event.target.value)} />
            <Form.Input fluid label='Water' placeholder='Water amount' labelPosition='right'
              value={this.state.water}
              onChange={(event) => this.setWater(event.target.value)}>
              <input />
              <Label>ml</Label>
            </Form.Input>
          </Form.Group>
        </Form>

        <Divider></Divider>
        <Tab menu={{ secondary: true }} panes={this.panes} />


      </Container>
    );
  }
}

export default App;