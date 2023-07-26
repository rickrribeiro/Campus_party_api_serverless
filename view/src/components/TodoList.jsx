import DataService from "../services/data-service";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const dataService = new DataService()
  const {
    items
  } = props.props;

  console.log("asdsadas")
  console.log(items)
  return (
    <div class="g-sidenav-show  bg-gray-200">

    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">

      <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
        <div class="container-fluid py-1 px-3">
         <h1>%nome legal aq%</h1>
          <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
  
            </div>
            <div class="navbar-nav  justify-content-end">
              <div class="nav-item d-flex align-items-center">
                <a href="sign-in.html" class="nav-link text-body font-weight-bold px-0">
                  <i class="fa fa-user me-sm-1"></i>
                  <span class="d-sm-inline d-none">Log-in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="container-fluid py-4">
        <div class="row">
          <div class="col-12">
            <div class="card my-4">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                  <h6 class="text-white text-capitalize ps-3">To-do list</h6>
                </div>
              </div>
              <div class="card-body px-0 pb-2">
                <div class="table-responsive p-0">
                  <table class="table align-items-center mb-0">
                    <thead>
                      <tr>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                        <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                        <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                        <th class="text-secondary opacity-7"></th>
                      </tr>
                    </thead>
                    <tbody>
  
                      {items.map((el) => 
                        <TodoItem props={el}/>
                      )}
  
                    </tbody>
                  </table>
                </div>
              </div>
              <button onClick={() => dataService.createItem({
                name: 'name'+Math.random(),
                description: 'description'+Math.random(),
                status: true,
              })}>
              <div class="card-add position-relative z-index-2">
                  <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3 text-center">
                    <h6 class="text-white text-capitalize ps-3">+</h6>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <script src="./assets/js/core/popper.min.js"></script>
    <script src="./assets/js/core/bootstrap.min.js"></script>
    <script src="./assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="./assets/js/plugins/smooth-scrollbar.min.js"></script>
   
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script src="./assets/js/material-dashboard.min.js?v=3.0.4"></script>
  </div>
  );
};

export default TodoList;
