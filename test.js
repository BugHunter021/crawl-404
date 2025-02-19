
    CHANGE_EMAIL: function CHANGE_EMAIL() {
      return '/admin/change-email';
    },
    CHANGE_USERNAME: function CHANGE_USERNAME() {
      return '/admin/change-username';
    },
    CHANGE_ACTIONS: function CHANGE_ACTIONS() {
      return '/admin/change-actions';
    }
  },
  API: {
    REMOTE_----------------------: {
      /**
       * @param { number | string } accountId
       */
      EARNINGS: function EARNINGS(accountId) {
        return "/api/v1/remote-control/earnings?account_id=".concat(accountId);
      }
    },
    CHANGE_EMAIL: function CHANGE_EMAIL() {
      return '/api/change-email';
    }
  },
