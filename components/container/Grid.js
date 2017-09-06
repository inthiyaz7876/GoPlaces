import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1600,
    height: 580,
    overflowY: 'auto',
  },
};

class Grid extends React.Component{
	constructor(props)
	{
		super(props);
	}
	render()
	{
		return(

				<div style={styles.root}>
    <GridList
      cellHeight={280}
      style={styles.gridList} cols={3}>
      <Subheader>Result for Your Search</Subheader>
      {this.props.data1.map((tile) => (
        <GridTile
          
          title={tile.name}
          
          actionIcon={<IconButton><StarBorder color="red" />save</IconButton>}
        >
          <img src={tile.photo} />
        </GridTile>
      ))}
    </GridList>
  </div>


			  );
	}
}

export default Grid;