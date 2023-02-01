import React from 'react';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/vets">
        Vets
      </MenuItem>
      <MenuItem icon="asterisk" to="/specialties">
        Specialties
      </MenuItem>
      <MenuItem icon="asterisk" to="/types">
        Types
      </MenuItem>
      <MenuItem icon="asterisk" to="/owners">
        Owners
      </MenuItem>
      <MenuItem icon="asterisk" to="/pets">
        Pets
      </MenuItem>
      <MenuItem icon="asterisk" to="/visits">
        Visits
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
