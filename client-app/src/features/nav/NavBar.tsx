import React, { useContext } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import ActivityStore from '../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';


const NavBar: React.FC = () => {
  const activitStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <img src='/assets/logo.png' alt='logo' style={{marginRight: '10px'}}/>
        </Menu.Item>
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
        <Menu.Item>
          <Button onClick={activitStore.openCreateForm} positive content='Create Activity'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
