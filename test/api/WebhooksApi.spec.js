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

  beforeEach(function() {
    instance = new Mimepost.WebhooksApi();
  });

  describe('(package)', function() {
    describe('WebhooksApi', function() {
      describe('webhooksGet', function() {
        it('should call webhooksGet successfully', function(done) {
          // TODO: uncomment webhooksGet call and complete the assertions
          /*

          instance.webhooksGet(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Mimepost.ApiResponseAllWebhooks);
            expect(data.success).to.be.a('number');
            expect(data.success).to.be(1);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("Webhook found");
            {
              let dataCtr = data.data;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Mimepost.ApiResponseAllWebhooksData);
                expect(data.id).to.be.a('number');
                expect(data.id).to.be(0);
                expect(data.entered).to.be.a('string');
                expect(data.entered).to.be("2019-09-30 20:54:57");
                expect(data.url).to.be.a('string');
                expect(data.url).to.be("http://yourdomain.com/yourscript");
                expect(data.active).to.be.a('number');
                expect(data.active).to.be(1);
                expect(data.desc).to.be.a('string');
                expect(data.desc).to.be("My Webhook for Delivered");
                {
                  let dataCtr = data.events;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("delivered");
                  }
                }

                      }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webhooksIdDelete', function() {
        it('should call webhooksIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for webhooksIdDelete call and complete the assertions
          /*
          var id = 56;

          instance.webhooksIdDelete(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Mimepost.ApiResponse);
            expect(data.success).to.be.a('number');
            expect(data.success).to.be(1);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("");
            expect(data.error_code).to.be.a('number');
            expect(data.error_code).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webhooksIdGet', function() {
        it('should call webhooksIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for webhooksIdGet call and complete the assertions
          /*
          var id = 56;

          instance.webhooksIdGet(id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Mimepost.ApiResponseSingleWebhooks);
            expect(data.success).to.be.a('number');
            expect(data.success).to.be(1);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("Webhook found");
            expect(data.data).to.be.a(Mimepost.ApiResponseAllWebhooksData);
                  expect(data.data.id).to.be.a('number');
              expect(data.data.id).to.be(0);
              expect(data.data.entered).to.be.a('string');
              expect(data.data.entered).to.be("2019-09-30 20:54:57");
              expect(data.data.url).to.be.a('string');
              expect(data.data.url).to.be("http://yourdomain.com/yourscript");
              expect(data.data.active).to.be.a('number');
              expect(data.data.active).to.be(1);
              expect(data.data.desc).to.be.a('string');
              expect(data.data.desc).to.be("My Webhook for Delivered");
              {
                let dataCtr = data.data.events;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("delivered");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webhooksIdPut', function() {
        it('should call webhooksIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for webhooksIdPut call and complete the assertions
          /*
          var id = 56;
          var opts = {};
          opts.webhook = new Mimepost.Webhook1();
          opts.webhook.desc = "My Webhook for Delivered";
          opts.webhook.url = "http://yourdomain.com/example.php/";
          opts.webhook.events = ["delivered"];
          opts.webhook.active = 1;

          instance.webhooksIdPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Mimepost.ApiResponseSingleWebhooks);
            expect(data.success).to.be.a('number');
            expect(data.success).to.be(1);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("Webhook found");
            expect(data.data).to.be.a(Mimepost.ApiResponseAllWebhooksData);
                  expect(data.data.id).to.be.a('number');
              expect(data.data.id).to.be(0);
              expect(data.data.entered).to.be.a('string');
              expect(data.data.entered).to.be("2019-09-30 20:54:57");
              expect(data.data.url).to.be.a('string');
              expect(data.data.url).to.be("http://yourdomain.com/yourscript");
              expect(data.data.active).to.be.a('number');
              expect(data.data.active).to.be(1);
              expect(data.data.desc).to.be.a('string');
              expect(data.data.desc).to.be("My Webhook for Delivered");
              {
                let dataCtr = data.data.events;
                expect(dataCtr).to.be.an(Array);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("delivered");
                }
              }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('webhooksPost', function() {
        it('should call webhooksPost successfully', function(done) {
          // TODO: uncomment, update parameter values for webhooksPost call and complete the assertions
          /*
          var opts = {};
          opts.webhook = new Mimepost.Webhook();
          opts.webhook.desc = "My Webhook for delivered";
          opts.webhook.url = "http://yourdomain.com/example.php/";
          opts.webhook.events = ["delivered"];
          opts.webhook.active = 1;

          instance.webhooksPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Mimepost.ApiResponseWebhooks);
            expect(data.success).to.be.a('number');
            expect(data.success).to.be(1);
            expect(data.message).to.be.a('string');
            expect(data.message).to.be("Webhook added successfully");
            expect(data.data).to.be.a(Mimepost.ApiResponseWebhooksData);
                  expect(data.data.id).to.be.a('number');
              expect(data.data.id).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
