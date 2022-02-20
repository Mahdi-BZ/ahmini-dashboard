import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface IPaiementMenuProps {
}

const PaiementMenu: React.FunctionComponent<IPaiementMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/paiment'} title={'AHMINI ASSUARANCE'} >
        <AsideMenuItemWithSub
            to='/crafted/adhesion/demands'
            title='Paiement CNSS'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Liste des femmes payés/ 3mois`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Liste des femmes non payé/3mois`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to='/crafted/registered-woman'
            title='Paiement Assurance'
        >
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Listes des femmes payés/mois'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Listes des femmes non payés/mois'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default PaiementMenu;
