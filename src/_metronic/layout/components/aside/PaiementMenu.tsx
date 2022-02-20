import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface IPaiementMenuProps {
}

const PaiementMenu: React.FunctionComponent<IPaiementMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/paiment'} title={'AHMINI ASSUARANCE'} >
        <AsideMenuItemWithSub
            to=''
            title='Paiement CNSS'
        >
            <AsideMenuItem
            to='/placeholder/femme-payee-3-mois'
            title={`Liste des femmes payés/ 3mois`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/placeholder/femme-non-payee-3-mois'
            title={`Liste des femmes non payé/3mois`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to=''
            title='Paiement Assurance'
        >
            <AsideMenuItem
            to='/placeholder/femme-payee-mois'
            title='Listes des femmes payés/mois'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/placeholder/femme-non-payee-mois'
            title='Listes des femmes non payés/mois'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default PaiementMenu;
