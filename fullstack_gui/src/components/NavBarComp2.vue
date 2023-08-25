<template>
    <div class="top-nav bg-dark">
        <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active"
                    href="https://www.google.com/maps/place/Life+Choices/@-33.9856598,18.4901237,17z/data=!3m1!4b1!4m6!3m5!1s0x1dcc433bedd50e81:0x9c746d268c8e0ad9!8m2!3d-33.9856643!4d18.4926986!16s%2Fg%2F1tgc20ns?entry=ttu"><i
                        class="bi bi-geo-alt-fill bg-dark"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/user"><i class="bi bi-people-fill"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="/admin"><i class="bi bi-person-gear"></i>
                </a>
            </li>
            <li class="nav-item">
                <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"><i class="bi bi-person-fill-add"></i></a>
            </li>
        </ul>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">First Name:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Last Name:</label>
                                <input type="text" class="form-control" id="lastname">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addUser">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.bi :hover {
    color: blue;
}

.bi {
    text-decoration: none;
    color: white;
}
</style>