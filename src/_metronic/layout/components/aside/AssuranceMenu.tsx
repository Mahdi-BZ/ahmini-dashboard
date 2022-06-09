import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface IAssuranceMenuProps {
}

const AssuranceMenu: React.FunctionComponent<IAssuranceMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/sinister'} title={'AHMINI ASSUARANCE'} >
        <AsideMenuItemWithSub
            to=''
            title='Inscription'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands/add'
            title={`Demande d'inscription`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Validation d'inscription`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adherant'
            title={`Validation d'adhèsion`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to=''
            title='Financement'
        >
            <AsideMenuItem
            to='/crafted/registered-woman/sponsored'
            title='Listes des femmes payés/parrainé'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/placeholder/fichier-financier'
            title='Le fichier financier'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to=''
            title='Paiement'
        >
            <AsideMenuItem
            to='/placeholder/femme-payee-mois'
            title='Liste de femmes payées / mois'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/placeholder/femme-non-payee-mois'
            title='Listes des femmes non payé plus de mois'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/placeholder/femme-suspendu'
            title='Liste des femmes suspendu'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to=''
            title='Sinistres'
        >
            {/* <AsideMenuItem to='/crafted/sinister' title='Liste des sinistres' hasBullet={true} /> */}
            
            <AsideMenuItem
            to='/crafted/sinister/add'
            title='Demande de sinistre'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/paidsinister'
            title='Validation du sinistre'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/declaredsinister'
            title='Déclaration du sinistre'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default AssuranceMenu;
