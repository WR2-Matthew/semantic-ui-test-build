import React from 'react';
import { Button, Segment, Container } from 'semantic-ui-react'
import './App.css';

function App() {
  return (
    <div className="ui container">
      {/* HEADER */}
      <h1 className='ui small header'>Heading 1</h1>
      <h2 className='ui tiny header'>Heading 2</h2>
      <h3 className='ui medium header'>Heading 3</h3>
      <h4 className='ui large header'>Heading 4</h4>
      <h5 className='ui huge header'>Heading 5</h5>
      <h6 className='ui small header'>Heading 6</h6>

      <br />
      <br />
      <br />

      {/* BUTTONS */}
      <Button className='ui button'>Read more</Button>
      <button className='ui primary button'>Read more</button>
      <button className='ui secondary button'>Read more</button>
      <button className='ui positive button'>Read more</button>
      <button className='ui negative button'>Read more</button>
      <br />
      <br />
      <button className='ui red button'>Read more</button>
      <Button color='blue'>Read more</Button>
      <button className='ui green button'>Read more</button>
      <button className='ui massive purple button' id='butt'>Read more</button>
      <button className='ui huge yellow button'>Read more</button>
      <button className='ui big brown button'>Read more</button>
      <button className='ui large orange button'>Read more</button>
      <button className='ui medium olive button'>Read more</button>
      <button className='ui small teal button'>Read more</button>
      <button className='ui tiny violet button'>Read more</button>
      <button className='ui mini grey button'>Read more</button>
      <br />
      <br />
      <button className='ui disabled blue button'>Read more</button>
      <button className='ui loading grey button'>Read more</button>
      <br />
      <br />
      <button className='ui basic fluid button'>Read more</button>
      <button className='ui red basic button'>Read more</button>
      <button className='ui green basic button'>Read more</button>
      <button className='ui blue basic button'>Read more</button>
      <button className='ui teal basic button'>Read more</button>
      <button className='ui brown basic button'>Read more</button>
      <br />
      <br />
      <Button circular color='facebook' icon='facebook' href='https://www.facebook.com/matt.ostraszewski' />
      <br />
      <br />
      {/* ICONS */}
      <button class='ui icon button'>
        <i class='cloud icon'></i>
      </button>

      <button class='ui labeled icon button'>
        <i class='pause icon'></i>
      </button>

      <button class='ui right icon button'>
        <i class='right arrow icon'></i>
      </button>

      <div className='ui buttons' >
        <button className='ui button' >One</button>
        <button className='ui button' >Two</button>
        <button className='ui button' >Three</button>
      </div>

      <i className='add to calender icon'></i>
      <i className='alarm outline icon'></i>
      <i className='alarm mut te outline icon'></i>
      <i className='alarm mute icon'></i>
      <i className='alarm icon'></i>
      <i className='at icon'></i>
      <i className='browser icon'></i>
      <i className='bug icon '></i>
      <i className='calender outline icon'></i>
      <i className='calender icon'></i>
      <i className='checked calender icon '></i>
      <i className='cloud icon'></i>

      <br />
      <br />

      {/* LABELS */}
      <div className='ui label'>
        <i className='mail icon'></i>
      </div>

      <div className='inline field'>
        <input type='text' />
        <div className='ui left pointing label'>
          That username is taken
        </div>
      </div>

      <br />
      <br />

      {/* BREADCRUMBS */}
      <div className='ui breadcrumb'>
        <a className='section' >  Home</a>
        <div className='divider'> / </div>
        <a className='section'>Store</a>
        <div className='divider'> / </div>
        <div className=' active section'>T-Shirts</div>
      </div>

      <br />
      <br />

      {/* LISTS */}
      <div className='ui list'>
        <div className='item'>Apples</div>
        <div className='item'>Oranges</div>
        <div className='item'>Pears</div>
      </div>

      <br />

      <div className='ui link list'>
        <div className='active item'>Home</div>
        <a className='item'>About</a>
        <a className='item'>Jobs</a>
        <a className='item'>Team</a>
      </div>

      <br />

      <div className='ui celled horizontal list'>
        <div className='active item'>Home</div>
        <a className='item'>About</a>
        <a className='item'>Jobs</a>
        <a className='item'>Team</a>
      </div>

      <br />
      <br />

      {/* FORMS */}

      <form className='ui form'>
        <div className='field'>
          <label>First Name</label>
          <input type='text' placeholder='' />
        </div>

        <div className='field'>
          <label>Last Name</label>
          <input type='text' placeholder='' />
        </div>

        <div className='field'>
          <div className='ui checkbox'>
            <input type='checkbox' />
            <label>I agree</label>
          </div>
        </div>
        <button className='ui button' type='submit'>Submit</button>
      </form>

      <br />
      <br />
      {/* MESSAGES */}

      <div className='ui success message'>
        <div className='header'>
          Some Message
        </div>
        <p>PAGING DR FAGGOT</p>
      </div>

      <div className='ui error message'>
        <div className='header'>
          Some Message
        </div>
        <p>PAGING DR FAGGOT</p>
      </div>

      <div className='ui purple message'>
        <div className='header'>
          Some Message
        </div>
        <p>PAGING DR FAGGOT</p>
      </div>

      <br />
      <br />

      {/* TABLES AND PAGINATION */}
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="ui ribbon label">First</div>
            </td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className='positive'>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
          <tr className='negative'>
            <td>Cell</td>
            <td>Cell</td>
            <td>Cell</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colSpan="3">
              <div className="ui pagination right floated menu">
                <a className="icon item">
                  <i aria-hidden="true" className="chevron left icon"></i>
                </a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
                  <i aria-hidden="true" className="chevron right icon"></i>
                </a>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>

      <br />
      <br />

      {/* SEGMENT */}

      <Segment size='big'>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </Segment>

      <br />

      <Container>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </Container>

      <br />

      <div className='ui stacked segment'>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div>

      <br />

      <div className='ui piled segment'>
        <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
      </div>

      <br />

      <div className='ui segments'>
        <div className='ui red inverted segment'>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>

        <br />

        <div className='ui green inverted segment'>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>

        <br />

        <div className='ui blue inverted raised segment'>
          <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </div>
      </div>

      <br />
      <br />

      {/* STEPS */}

      <div className="ui steps">
        <div className="step">
          <i aria-hidden="true" className="truck icon"></i>
          <div className="content">
            <div className="title">Shipping</div>
            <div className="description">Choose your shipping options</div>
          </div>
        </div>

        <div className="active step">
          <i aria-hidden="true" className="payment icon"></i>
          <div className="content">
            <div className="title">Billing</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>

        <div className="disabled step">
          <i aria-hidden="true" className="info icon"></i>
          <div className="content">
            <div className="title">Confirm Order</div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* CONTENT BLOCK/CARD */}

      <div className='ui card'>
        <div className='content'>
          <div className='header'>
            content block
          </div>
          <div className='meta'>
            Meta info
          </div>
        </div>
        <div className='content'>
          <p>This is my content</p>
        </div>
        <div className='extra content'>
          <button className='ui button'>Button</button>
        </div>
      </div>

      <br />
      <br />

      {/* ITEM */}

      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </div>
          <div className="content">
            <div className="header">Header</div>
            <div className="meta">Metadata</div>
            <div className="description">Description</div>
            <div className="extra">Extra</div>
          </div>
        </div>
        <div className="item">
          <div className="image">
            <img src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </div>
          <div className="content">
            <div className="header">Header</div>
            <div className="meta">Metadata</div>
            <div className="description">Description</div>
            <div className="extra">Extra</div>
          </div>
        </div>
      </div>

      <br />
      <br />

      {/* STATISTICS */}

      <div class="ui statistic">
        <div class="value">5,550</div>
        <div class="label">Downloads</div>
      </div>

      <br />
      <br />

      {/* GRID SYSTEM */}

      <div className='ui grid'>
        <div className='row'>
          <div className='column'>
            <button className='ui huge button'></button>
          </div>

          <div className='column'>
            <button className='ui huge button'></button>
          </div>

          <div className='column'>
            <button className='ui huge button'></button>
          </div>

          <div className='column'>
            <button className='ui huge button'></button>
          </div>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>

        <div className='column'>
          <button className='ui huge button'></button>
        </div>
      </div>

      <div className='ui grid'>
        <div className='column four wide'>
          <button className='ui huge button fluid'></button>
        </div>

        <div className='column four wide'>
          <button className='ui huge button fluid'></button>
        </div>

        <div className='column four wide'>
          <button className='ui huge button fluid'></button>
        </div>

        <div className='column four wide'>
          <button className='ui huge button fluid'></button>
        </div>
      </div>

      <div className='ui grid'>
        <div className='column four wide'>
          <button className='ui huge button fluid'></button>
        </div>

        <div className='column eight wide'>
          <button className='ui huge button fluid'></button>
        </div>

        <div className='column four wide'>
          <button className='ui huge button fluid'></button>
        </div>

      </div>


    </div>

  );
}

export default App;
