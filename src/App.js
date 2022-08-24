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
  Label,
  Message
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
      menuItem: 'Tetsu Kasuya 4-6',
      render: () => this.tetsuMethod(),
    },
    {
      menuItem: 'James Hoffmann',
      render: () => this.hoffmannMethod(),
    },
    {
      menuItem: 'Other',
      render: () => this.otherMethods(),
    },
  ]

  pourStack = (title, color, steps) => <Grid.Column>
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
              +
              {step.addAmount}
            </Label>
          )}
          {'addAmount' in step && <Label color='grey'>=</Label>}
          {('addAmount' in step || 'amount' in step) && <Label color={color}>
            {'addAmount' in step && (step.lastAmount + step.addAmount)}
            {'amount' in step && (step.amount)}
            <Label.Detail>ml</Label.Detail>
          </Label>}

          {'message' in step && (<Message>{step.message}</Message>)}
        </Segment>
      )}
    </Segment.Group>
  </Grid.Column>

  tetsuMethod() {
    const firstPart = 0.4 * this.state.water;
    const secondPart = 0.6 * this.state.water;
    const tetsuData = {
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

    return (
      <span>
        <Divider horizontal> Phase One </Divider>
        <Grid columns={3} stackable>
          {this.pourStack("Standard", "teal", tetsuData.standard)}
          {this.pourStack("Sweet", "orange", tetsuData.sweet)}
          {this.pourStack("Bright", "yellow", tetsuData.bright)}
        </Grid>
        <Divider horizontal> Phase Two <Icon name="expand arrows alternate" /></Divider>
        <Grid columns={3} stackable>
          {this.pourStack("Strong", "red", tetsuData.strong)}
          {this.pourStack("Medium", "purple", tetsuData.medium)}
          {this.pourStack("Light", "olive", tetsuData.light)}
        </Grid>
        <Message>Based on <a target="_blank" href="https://firefortysix.com/2021/08/21/putting-the-flexibility-of-tetsu-4-6-to-the-test/">Firefortsix</a></Message>
      </span>
    )
  }

  hoffmannMethod() {
    const firstPart = 0.6 * this.state.water;
    const secondPart = 0.4 * this.state.water;
    const hoffmannData = {
      ultimate: [
        {
          number: 1,
          time: '0:00',
          amount: 2 * this.state.coffee
        },
        {
          number: 2,
          time: '0:45',
          addAmount: Math.round(firstPart - 2 * this.state.coffee),
          lastAmount: Math.round(2 * this.state.coffee)
        },
        {
          number: 3,
          time: '1:15 -> 1:45',
          addAmount: Math.round(secondPart),
          lastAmount: Math.round(firstPart)
        },
        {
          number: 4,
          time: '1:45',
          message: "Stir one round, and another round in reverse direction"
        },
        {
          number: 5,
          time: '~',
          message: "During middle of drawdown, swirl V60 cone to achieve flat bed"
        }
      ],
      switch: [
        {
          number: 1,
          time: '0:00',
          amount: this.state.water,
          message: '2 minute steep'
        },
        {
          number: 2,
          time: '2:00',
          message: 'Stir and wait 15 seconds'
        },
        {
          number: 3,
          time: '2:15',
          message: 'Release for drawdown'
        }
      ]
    }

    return (
      <span>
        <Grid columns={3} stackable centered>
          {this.pourStack("Ultimate", "teal", hoffmannData.ultimate)}
          {this.pourStack("Switch", "teal", hoffmannData.switch)}
        </Grid>
        <Message>Based on <a target="_blank" href="https://firefortysix.com/2022/06/04/test-driving-four-different-v60-coffee-recipes-tetsu-cafec-onyx-hoffmann/">Firefortsix</a> and <a target="_blank" href="https://www.youtube.com/watch?v=QjIvN8mlK9Y">James Hoffmann</a></Message>
      </span>)
  }

  otherMethods() {
    const firstPart = 0.6 * this.state.water;
    const secondPart = 0.4 * this.state.water;
    const otherData = {
      ice: [
        {
          number: 1,
          time: '0:00',
          amount: Math.round(0.6 * this.state.water),
          message: 'Add ' + Math.round(0.6 * this.state.water) + ' ml as ice'
        },
        {
          number: 2,
          time: '0:00',
          amount: Math.round(3 * this.state.coffee)
        },
        {
          number: 3,
          time: '2:00',
          addAmount: Math.round(secondPart - 3 * this.state.coffee),
          lastAmount: Math.round(3 * this.state.coffee),
          message: 'Add rest of the water in 50g increments'
        }
      ]
    }

    return (
      <span>
        <Grid columns={3} stackable centered>
          {this.pourStack("Ice", "teal", otherData.ice)}
        </Grid>
        <Message>Based on <a target="_blank" href="https://www.youtube.com/watch?v=Y3jxJv5UiPg">Hueguh</a></Message>
      </span>)
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