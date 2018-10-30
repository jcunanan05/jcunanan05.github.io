import React from 'react';

export default function Drawer({ title = 'Title' }) {
  return (
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">
          Link
        </a>
        <a class="mdl-navigation__link" href="">
          Link
        </a>
        <a class="mdl-navigation__link" href="">
          Link
        </a>
        <a class="mdl-navigation__link" href="">
          Link
        </a>
      </nav>
    </div>
  );
}
