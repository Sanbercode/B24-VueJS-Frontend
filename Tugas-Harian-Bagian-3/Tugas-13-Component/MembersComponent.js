export const MembersComponent = {
    props: ['members', 'showedMember'],
    template: `
        <tbody>
            <tr v-for="(member, index) in members" :key="member.id">
                <td>{{ ++index }}</td>
                <td>{{ member.name }}</td>
                <td>{{ member.address }}</td>
                <td>{{ member.no_hp }}</td>
                <td><img :src="member.photo_profile ? 'http://demo-api-vue.sanbercloud.com/' + member.photo_profile : 'https://dummyimage.com/16:9x1080'"
                        alt="avatar" width="200px"></td>
                <td>
                    <button class="btn btn-sm btn-warning" @click="$emit('edit-member', member)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-sm btn-danger" @click="$emit('delete-member', member.id)"><i class="fa fa-trash"></i></button>
                    <button type="button" class="btn btn-sm btn-success my-1" @click="$emit('show-member', member.id)"
                            data-toggle="modal" data-target="#uploadPhotoProfile"><i class="fa fa-upload"></i></button>
                    <button type="button" class="btn btn-sm btn-info" @click="$emit('show-member', member.id)" data-toggle="modal"
                            data-target="#detailMember"><i class="fa fa-eye"></i></button>
                    <div class="modal fade" id="detailMember" data-backdrop="static" data-keyboard="false" tabindex="-1"
                         aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Details Member</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <img :src="showedMember.photo_profile ? 'http://demo-api-vue.sanbercloud.com/' + showedMember.photo_profile : 'https://dummyimage.com/16:9x1080'" class="rounded mx-auto d-block" alt="avatar" width="450px">
                                    <table class="table my-3">
                                        <thead class="thead-dark">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>{{ showedMember.name }}</td>
                                            <td>{{ showedMember.address }}</td>
                                            <td>{{ showedMember.no_hp }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
                    <div class="modal fade" id="uploadPhotoProfile" data-backdrop="static" data-keyboard="false"
                         tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="uploadPhoto">Upload Photo Profile</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="custom-file my-3">
                                        <input type="file" id="myfile" ref="file" name="foto" class="custom-file-input"
                                               onchange="$(this).next().after().text($(this).val().split('\\\\').slice(-1)[0])"
                                               @change="previewFiles"
                                               accept="image/*, application/json">
                                        <label class="custom-file-label" for="myfile">Choose Photo Profile...</label>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" @click.prevent="$emit('upload-photo', {id: showedMember.id, files: files})"
                                            data-dismiss="modal">Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    `,
    methods: {
        previewFiles() {
            this.files = this.$refs.file[0].files[0];
        }
    },
    data () {
        return {
            files:[]
        }
    }
}