import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface IHomeMenuProps {
}

const HomeMenu: React.FunctionComponent<IHomeMenuProps> = (props) => {
  return (
      
    <AsideMenuItemWithSub
        to='/crafted/users'
        title='Utilisateurs'
    >
        <AsideMenuItemWithSub to={'/crafted/users'} title={'Administrateurs'}>
            <AsideMenuItem
            to='/crafted/users/admin'
            title='Liste des administrateurs'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to={'/crafted/users'} title={'Ambassadeurs'}>
            <AsideMenuItem
            to='/crafted/users/ambassador/add'
            title="Demande d’inscription"
            hasBullet={true}
            />
            <AsideMenuItem 
            to='/crafted/users/ambassador'
            title='Liste des ambassadeurs'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to={'/crafted/users'} title={'Particuliers'}>
            <AsideMenuItem
            to='/crafted/users/particular/add'
            title="Demande d’inscription"
            hasBullet={true}
            />
            <AsideMenuItem 
            to='/crafted/users/particular'
            title='Liste des particuliers'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub to={'/crafted/users'} title={'Associations'}>
            <AsideMenuItem
            to='/crafted/users/association/add'
            title="Demande d’inscription"
            hasBullet={true}
            />
            <AsideMenuItem 
            to='/crafted/users/association'
            title='Liste des Associations'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default HomeMenu;
