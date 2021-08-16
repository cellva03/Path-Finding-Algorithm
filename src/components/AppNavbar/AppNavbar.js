import React, { useState } from 'react';
import "./AppNavbar.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ButtonGroup
} from 'reactstrap';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import ProgressBar from "../ProgressBar/ProgressBar";

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark expand="md" className='nav-bar'>
        <img src="https://www.anotherlovestory.ie/wp-content/uploads/2017/03/ALGORITHM-LOGO-WHITE-1.png" alt="Logo" height="70px" width="70px"/>
        <NavbarBrand href="/" style={{marginLeft:'20px'}}>PathVisualizer</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id={"Tooltip-" + 5} nav caret style={{color:'white'}} className='drop-down'>
                Algorithms
              </DropdownToggle>
              <DropdownMenu className='drop-menu'>
                <DropdownItem className='drop-item' onClick={() => { props.handleDijkstra(); props.handleVisualization() }}> 
                  Dijkstra Algorithm
                </DropdownItem>
                <DropdownItem className='drop-item' onClick={() => { props.handleDFS(); props.handleVisualization() }}>DFS Algorithm            
                </DropdownItem>
                <DropdownItem className='drop-item' onClick={() => { props.handleBFS(); props.handleVisualization() }}>BFS Algorithm
                </DropdownItem>
                <DropdownItem className='drop-item' onClick={() => { props.handleAstar(); props.handleVisualization() }}>A* Algorithm
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id={"Tooltip-" + 4} nav caret style={{color:'white'}} className='drop-down'>
                Generate Maze
              </DropdownToggle>
              <DropdownMenu className='drop-menu'>
                <DropdownItem onClick={() => { props.handleMaze(); props.handleVisualization() }} className='drop-item' >Recursive Division
                </DropdownItem>
                <DropdownItem onClick={props.handleRandomMaze} className='drop-item' >Random Maze
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>  
        </Collapse>
        <NavbarText id={"Tooltip-" + 3} style={{color:'white',margin:'30px'}}>
          <ProgressBar visitedNodes={props.visitedNodes} shortestNodes={props.shortestNodes}/>
        </NavbarText>
        <NavbarText className="clear-functions">
            <Button id={"Tooltip-" + 0} onClick={props.handleClearPath} className='clear-path'>Clear Path</Button>
            <Button id={"Tooltip-" + 1} onClick={props.handleClearGrid} className='clear-grid'>Clear Grid</Button>         
        </NavbarText>
        <NavbarText id={"Tooltip-" + 2}>
          <DarkModeToggle />
        </NavbarText>
      </Navbar>
    </div>
  );
}

export default AppNavbar;