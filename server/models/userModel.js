const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userType: {
    type: String,
    required: true,
    enum: ["donar", "organization", "hospital", "admin"],
  },

  // is required if userType is donar or admin
  name: {
    type: String,
    required: function () {
      if (this.userType == "admin" || this.userType == "donar") {
        return true;
      }
      return false;
    },
  },

  // is required if userType is hospital

  hospitalName: {
    type: String,
    required: function () {
      if (this.userType == "hospital") {
        return true;
      }
      return false;
    },
  },

  // is required if userType is organization

  organizationName: {
    type: String,
    required: function () {
      if (this.userType == "organization") {
        return true;
      }
      return false;
    },
  },

  // website and address are required if useType is only organization or hospital

  website: {
    type: String,
    required: function () {
      if (this.userType == "organization" || this.userType == "hospital") {
        return true;
      }
      return false;
    },
  },

  address: {
    type: String,
    required: function () {
      if (this.userType == "organization" || this.userType == "hospital") {
        return true;
      }
      return false;
    },
  },

  // email, password, phone are same for donar, hospital, and organization
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },
});

const second = new mongoose.Schema({
      name: {
        type: String,
      },
      email: {
        type: String,
      }
})

module.exports = mongoose.model("users", userSchema);
module.exports = mongoose.model("user" , second);
