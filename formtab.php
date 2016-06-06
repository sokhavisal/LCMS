<!DOCTYPE html>
<html>
<head>
    <title>W2UI Demo: forms-5</title>
    <link rel="stylesheet" type="text/css" href="http://w2ui.com/src/w2ui-1.4.2.min.css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="http://w2ui.com/src/w2ui-1.4.2.min.js"></script>
</head>
<body>

<div id="form" style="width: 750px;">
    <div class="w2ui-page page-0">
        <div class="w2ui-field">
            <label>First Name:</label>
            <div>
                <input name="first_name" type="text" maxlength="100" size="60"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>Last Name:</label>
            <div>
                <input name="last_name" type="text" maxlength="100" size="60"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>Comments:</label>
            <div>
                <textarea name="comments" type="text" style="width: 100%; height: 80px; resize: none"></textarea>
            </div>
        </div>
    </div>
    <div class="w2ui-page page-1">
        <div class="w2ui-field">
            <label>Address:</label>
            <div>
                <input name="address1" type="text" maxlength="100" style="width: 100%"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>Line 2:</label>
            <div>
                <input name="address2" type="text" maxlength="100" style="width: 100%"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>City:</label>
            <div>
                <input name="city" type="text" maxlength="50" size="25"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>State:</label>
            <div>
                <input name="state" type="text" maxlength="2" size="2"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>Zip:</label>
            <div>
                <input name="zip" type="text" maxlength="10" size="10"/>
            </div>
        </div>
    </div>
    <div class="w2ui-page page-2">
        <div class="w2ui-field">
            <label>Short Bio:</label>
            <div>
                <textarea name="short_bio" type="text" style="width: 100%; height: 80px; resize: none"></textarea>
            </div>
        </div>
        <div class="w2ui-field">
            <label>Talk Name:</label>
            <div>
                <input name="talk_name" type="text" maxlength="100" style="width: 100%"/>
            </div>
        </div>
        <div class="w2ui-field">
            <label>Talk Description:</label>
            <div>
                <textarea name="description" type="text" style="width: 100%; height: 80px; resize: none"></textarea>
            </div>
        </div>
    </div>

    <div class="w2ui-buttons">
        <button class="btn" name="reset">Reset</button>
        <button class="btn" name="save">Save</button>
    </div>
</div>

<script type="text/javascript">
$(function () {
    $('#form').w2form({ 
        name   : 'form',
        header : 'Form with Tabs',
        url    : 'server/post',
        fields : [
            { field: 'first_name', type: 'text', required: true },
            { field: 'last_name',  type: 'text', required: true },
            { field: 'comments',   type: 'text'},
            { field: 'address1', type: 'text', required: true },
            { field: 'address2', type: 'text' },
            { field: 'city', type: 'text', required: true },
            { field: 'state', type: 'text', required: true },
            { field: 'zip', type: 'int', required: true },
            { field: 'short_bio', type: 'text' },
            { field: 'talk_name', type: 'text', required: true },
            { field: 'description', type: 'text' }
        ],
        tabs: [
            { id: 'tab1', caption: 'General' },
            { id: 'tab2', caption: 'Address'},
            { id: 'tab3', caption: 'About' }
        ],
        actions: {
            reset: function () {
                this.clear();
            },
            save: function () {
                this.save();
            }
        }
    });
});
</script>

</body>
</html>