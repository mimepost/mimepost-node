/*
 * Mimepost
 * MimePost API for sending email. You can find out more about MimePost at [https://mimepost.com](http://mimepost.com). For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: support@mimepost.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Mimepost);
  }
}(this, function(expect, Mimepost) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('AccountProfile', function() {
      beforeEach(function() {
        instance = new Mimepost.AccountProfile();
      });

      it('should create an instance of AccountProfile', function() {
        // TODO: update the code to test AccountProfile
        expect(instance).to.be.a(Mimepost.AccountProfile);
      });

      it('should have the property first_name (base name: "first_name")', function() {
        // TODO: update the code to test the property first_name
        expect(instance).to.have.property('first_name');
        // expect(instance.first_name).to.be(expectedValueLiteral);
      });

      it('should have the property last_name (base name: "last_name")', function() {
        // TODO: update the code to test the property last_name
        expect(instance).to.have.property('last_name');
        // expect(instance.last_name).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property phone_number (base name: "phone_number")', function() {
        // TODO: update the code to test the property phone_number
        expect(instance).to.have.property('phone_number');
        // expect(instance.phone_number).to.be(expectedValueLiteral);
      });

      it('should have the property skype_id (base name: "skype_id")', function() {
        // TODO: update the code to test the property skype_id
        expect(instance).to.have.property('skype_id');
        // expect(instance.skype_id).to.be(expectedValueLiteral);
      });

      it('should have the property company_name (base name: "company_name")', function() {
        // TODO: update the code to test the property company_name
        expect(instance).to.have.property('company_name');
        // expect(instance.company_name).to.be(expectedValueLiteral);
      });

      it('should have the property website (base name: "website")', function() {
        // TODO: update the code to test the property website
        expect(instance).to.have.property('website');
        // expect(instance.website).to.be(expectedValueLiteral);
      });

      it('should have the property twitter_handle (base name: "twitter_handle")', function() {
        // TODO: update the code to test the property twitter_handle
        expect(instance).to.have.property('twitter_handle');
        // expect(instance.twitter_handle).to.be(expectedValueLiteral);
      });

      it('should have the property linkedin (base name: "linkedin")', function() {
        // TODO: update the code to test the property linkedin
        expect(instance).to.have.property('linkedin');
        // expect(instance.linkedin).to.be(expectedValueLiteral);
      });

      it('should have the property billing_name (base name: "billing_name")', function() {
        // TODO: update the code to test the property billing_name
        expect(instance).to.have.property('billing_name');
        // expect(instance.billing_name).to.be(expectedValueLiteral);
      });

      it('should have the property billing_company_name (base name: "billing_company_name")', function() {
        // TODO: update the code to test the property billing_company_name
        expect(instance).to.have.property('billing_company_name');
        // expect(instance.billing_company_name).to.be(expectedValueLiteral);
      });

      it('should have the property billing_address (base name: "billing_address")', function() {
        // TODO: update the code to test the property billing_address
        expect(instance).to.have.property('billing_address');
        // expect(instance.billing_address).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

    });
  });

}));
