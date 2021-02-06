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
    describe('Email', function() {
      beforeEach(function() {
        instance = new Mimepost.Email();
      });

      it('should create an instance of Email', function() {
        // TODO: update the code to test Email
        expect(instance).to.be.a(Mimepost.Email);
      });

      it('should have the property html (base name: "html")', function() {
        // TODO: update the code to test the property html
        expect(instance).to.have.property('html');
        // expect(instance.html).to.be(expectedValueLiteral);
      });

      it('should have the property subject (base name: "subject")', function() {
        // TODO: update the code to test the property subject
        expect(instance).to.have.property('subject');
        // expect(instance.subject).to.be(expectedValueLiteral);
      });

      it('should have the property from_email (base name: "from_email")', function() {
        // TODO: update the code to test the property from_email
        expect(instance).to.have.property('from_email');
        // expect(instance.from_email).to.be(expectedValueLiteral);
      });

      it('should have the property from_name (base name: "from_name")', function() {
        // TODO: update the code to test the property from_name
        expect(instance).to.have.property('from_name');
        // expect(instance.from_name).to.be(expectedValueLiteral);
      });

      it('should have the property global_merge_vars (base name: "global_merge_vars")', function() {
        // TODO: update the code to test the property global_merge_vars
        expect(instance).to.have.property('global_merge_vars');
        // expect(instance.global_merge_vars).to.be(expectedValueLiteral);
      });

      it('should have the property to (base name: "to")', function() {
        // TODO: update the code to test the property to
        expect(instance).to.have.property('to');
        // expect(instance.to).to.be(expectedValueLiteral);
      });

      it('should have the property cc (base name: "cc")', function() {
        // TODO: update the code to test the property cc
        expect(instance).to.have.property('cc');
        // expect(instance.cc).to.be(expectedValueLiteral);
      });

      it('should have the property bcc (base name: "bcc")', function() {
        // TODO: update the code to test the property bcc
        expect(instance).to.have.property('bcc');
        // expect(instance.bcc).to.be(expectedValueLiteral);
      });

      it('should have the property attachments (base name: "attachments")', function() {
        // TODO: update the code to test the property attachments
        expect(instance).to.have.property('attachments');
        // expect(instance.attachments).to.be(expectedValueLiteral);
      });

      it('should have the property vars (base name: "vars")', function() {
        // TODO: update the code to test the property vars
        expect(instance).to.have.property('vars');
        // expect(instance.vars).to.be(expectedValueLiteral);
      });

    });
  });

}));
