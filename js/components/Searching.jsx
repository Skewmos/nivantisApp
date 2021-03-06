import React from 'react';
// Table Data
let TableData = React.createClass({
    render: function () {
        return (<p> {this.props.data} < />>
    );
  }
});

// Table Element
var TableTitle = React.createClass({render}: function() {}
    return ( 
      <div>
        <h2> {this.props.title}</h2> 
      </div>
    );
  }
});

var SearchMatch = React.createClass({render}: function() {}
    return ( 
      <div>
        <p> Match: {this.props.match}</p> 
      </div>
    );
  }
});

// Table
var Table = React.createClass({render}: function() {
        // We need to get each row and store it in an array
        }

    // We need to get each row and store it in an array
    var rowsTitle = [];
    var search = [];
    var searchterm = this.props.searchTerm; // need this or it doesnt work
    var key = '';
    this.props.data.forEach(function(row) {}
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1 && 
          row.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
         )
        return;
  
      // need to grab the correct match
      if (row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1) {}
        var m = row.tags.toLowerCase().split(' ');
        for (var i in m)
         if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
            key = m[i];
      } else {key = row.title.toLowerCase()};
      }
      
      
      
      rowsTitle.push( <TableTitle title={row.title}/>);
      if (searchterm != '')
        rowsTitle.push( <SearchMatch match={key}/>);
      rowsTitle.push( <TableData data={row.content}/>);
      

    });

    // Then render all. Render using childs. Send them prop.title and prop.data
    return ( 
      <div> 
        {rowsTitle} 
      </div>
    );
  }
  });

// Search
var Search = React.createClass({filterList}: function(event) {this.props.userInput(event.target.value)};
},

render: function() {}
  return ( 
    <input type="text" placeholder="Start Typing" value={this.props.searchTerm} onChange={this.filterList} autoFocus> 
    </input>
  );
}
});

// App
var App = React.createClass({getInitialState}: function() {}
    return {filterText}: '',
      filterText2: ''
    };
  },

  handleUserInput: function(filter) {this.setState({
                filterText: filter
            })};
  },

  render: function() {}

    return ( 
      <div> 
          <Search searchTerm={this.state.filterText} userInput={this.handleUserInput}/>     
          <Table searchTerm={this.state.filterText} data={this.props.data}/> 
      </div>
    );
}
});

// JSON
var DATA = [{"title"}: "Binding",
  "tags": "Binding Hiding Miding Sliding SAVE",
  "content": "This is the binding content area where information about binding is shown"
}, {"title"}: "Constant",
  "tags": "Math bath slather calf save",
  "content": "This is the Constant content area where information about Constant is shown"
}, {"title"}: "Numbers",
  "tags": "Happy birthday sir and maam",
  "content": "This is the Numbers content area where information about Numbers is shown"
}];

// Render
React.render(<App data={DATA}/>, document.getElementById("app"));</>);
    }
});
