const renderAside = (elementNum) => {
    const content = `
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href="dashboard.html" target="_blank">
        <img src="./assets/img/logo.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold text-white">Menu GDS</span>
      </a>
    </div>
    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 1 ? 'active bg-gradient-primary' : ''}" href="dashboard.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">dashboard</i>
            </div>
            <span class="nav-link-text ms-1">Resumo - Hotel</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 2 ? 'active bg-gradient-primary' : ''}" href="tables.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">table_view</i>
            </div>
            <span class="nav-link-text ms-1">Tabela de Atividade</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 3 ? 'active bg-gradient-primary' : ''}" href="billing.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">receipt_long</i>
            </div>
            <span class="nav-link-text ms-1">Informações de Custos</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 4 ? 'active bg-gradient-primary' : ''}" href="virtual-reality.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">view_in_ar</i>
            </div>
            <span class="nav-link-text ms-1">Virtual Reality</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 5 ? 'active bg-gradient-primary' : ''}" href="">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">format_textdirection_r_to_l</i>
            </div>
            <span class="nav-link-text ms-1">Algo</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 6 ? 'active bg-gradient-primary' : ''}" href="notifications.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">notifications</i>
            </div>
            <span class="nav-link-text ms-1">Notificacões</span>
          </a>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8"><hr></h6>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 7 ? 'active bg-gradient-primary' : ''}" href="profile.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">person</i>
            </div>
            <span class="nav-link-text ms-1">Conta-Hotel</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 8 ? 'active bg-gradient-primary' : ''}" href="sign-in.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">login</i>
            </div>
            <span class="nav-link-text ms-1">Log-in</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white ${elementNum == 9 ? 'active bg-gradient-primary' : ''}" href="sign-up.html">
            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
              <i class="material-icons opacity-10">assignment</i>
            </div>
            <span class="nav-link-text ms-1">Cadastro</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="sidenav-footer position-absolute w-100 bottom-0 ">
      <div class="mx-3">
        <a class="btn bg-gradient-primary mt-4 w-100" href="sign-in.html" type="button">Sair</a>
      </div>
    </div>
  </aside>
  `
  document.write(content)
}
