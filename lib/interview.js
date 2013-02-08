/*
 * interview
 * https://github.com/woopra/interview
 *
 * Copyright (c) 2013 Billy Vong
 * Licensed under the MIT license.
 */

var WoopraTest = function() {
  this._campaignData = {};
};

WoopraTest.prototype.attachCampaignData = function() {
  var vars = {
        utm_source: 'test',
        woopra_content: 'billy'
      },
      i,
      key,
      value,
      campaignKeys = ['source', 'medium', 'content', 'campaign', 'term'];

  for (i = 0; i < campaignKeys.length; i++) {
    key = campaignKeys[i];
    value = vars['utm_' + key] || vars['woopra_' + key];

    if (typeof value !== 'undefined') {
      this._campaignData['woopra_' + key] = value;
    }
  }
};

// TODO: Implement your function here
WoopraTest.prototype.option = function(key, value) {
};


exports.WoopraTest = WoopraTest;
