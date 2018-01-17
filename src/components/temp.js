ClientRequest {
  domain: null,
  _events:
   { socket: [ [Function] ],
     abort: [Function],
     aborted: [Function],
     error: [Function],
     prefinish: [Function: requestOnPrefinish] },
  _eventsCount: 5,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: true,
  upgrading: false,
  chunkedEncoding: false,
  shouldKeepAlive: false,
  useChunkedEncodingByDefault: true,
  sendDate: false,
  _removedHeader: {},
  _contentLength: 0,
  _hasBody: true,
  _trailer: '',
  finished: true,
  _headerSent: true,
  socket:
   TLSSocket {
     _tlsOptions:
      { pipe: null,
        secureContext: [Object],
        isServer: false,
        requestCert: true,
        rejectUnauthorized: true,
        session: undefined,
        NPNProtocols: undefined,
        ALPNProtocols: undefined,
        requestOCSP: undefined },
     _secureEstablished: true,
     _securePending: false,
     _newSessionPending: false,
     _controlReleased: true,
     _SNICallback: null,
     servername: null,
     npnProtocol: undefined,
     alpnProtocol: false,
     authorized: true,
     authorizationError: null,
     encrypted: true,
     _events:
      { close: [Object],
        end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        secure: [Function],
        free: [Function: onFree],
        agentRemove: [Function: onRemove],
        drain: [Function: ondrain],
        error: [Function: socketErrorListener] },
     _eventsCount: 9,
     connecting: false,
     _hadError: false,
     _handle: null,
     _parent: null,
     _host: 'bitbucket.corp.com',
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: false,
     domain: null,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: true,
        ended: true,
        finished: true,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: true,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: false,
     allowHalfOpen: false,
     destroyed: true,
     _bytesDispatched: 379,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: undefined,
     _server: null,
     ssl: null,
     _requestCert: true,
     _rejectUnauthorized: true,
     parser: null,
     _httpMessage: [Circular],
     read: [Function],
     _consuming: true,
     _idleNext: null,
     _idlePrev: null,
     _idleTimeout: -1 },
  connection:
   TLSSocket {
     _tlsOptions:
      { pipe: null,
        secureContext: [Object],
        isServer: false,
        requestCert: true,
        rejectUnauthorized: true,
        session: undefined,
        NPNProtocols: undefined,
        ALPNProtocols: undefined,
        requestOCSP: undefined },
     _secureEstablished: true,
     _securePending: false,
     _newSessionPending: false,
     _controlReleased: true,
     _SNICallback: null,
     servername: null,
     npnProtocol: undefined,
     alpnProtocol: false,
     authorized: true,
     authorizationError: null,
     encrypted: true,
     _events:
      { close: [Object],
        end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        secure: [Function],
        free: [Function: onFree],
        agentRemove: [Function: onRemove],
        drain: [Function: ondrain],
        error: [Function: socketErrorListener] },
     _eventsCount: 9,
     connecting: false,
     _hadError: false,
     _handle: null,
     _parent: null,
     _host: 'bitbucket.corp.com',
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: false,
     domain: null,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: true,
        ended: true,
        finished: true,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: true,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: false,
     allowHalfOpen: false,
     destroyed: true,
     _bytesDispatched: 379,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server: undefined,
     _server: null,
     ssl: null,
     _requestCert: true,
     _rejectUnauthorized: true,
     parser: null,
     _httpMessage: [Circular],
     read: [Function],
     _consuming: true,
     _idleNext: null,
     _idlePrev: null,
     _idleTimeout: -1 },
  _header: 'POST /rest/comment-likes/latest/projects/AIR/repos/flight-details/pull-requests/37/comments/52544/likes HTTP/1.1\r\nAccept: application/json, text/plain, */*\r\nContent-Type: application/x-www-form-urlencoded\r\nUser-Agent: axios/0.16.2\r\nHost: bitbucket.corp.com\r\nAuthorization: Basic YWNoZW53ZWk6ODg0MTczMzhBbGxhaDM2NSEhISEhISEhIQ==\r\nConnection: close\r\nContent-Length: 0\r\n\r\n',
  _headers:
   { accept: 'application/json, text/plain, */*',
     'content-type': 'application/x-www-form-urlencoded',
     'user-agent': 'axios/0.16.2',
     host: 'bitbucket.corp.com',
     authorization: 'Basic YWNoZW53ZWk6ODg0MTczMzhBbGxhaDM2NSEhISEhISEhIQ==' },
  _headerNames:
   { accept: 'Accept',
     'content-type': 'Content-Type',
     'user-agent': 'User-Agent',
     host: 'Host',
     authorization: 'Authorization' },
  _onPendingData: null,
  agent:
   Agent {
     domain: null,
     _events: { free: [Function] },
     _eventsCount: 1,
     _maxListeners: undefined,
     defaultPort: 443,
     protocol: 'https:',
     options: { path: null },
     requests: {},
     sockets: { 'bitbucket.corp.com:443::::::::': [Object] },
     freeSockets: {},
     keepAliveMsecs: 1000,
     keepAlive: false,
     maxSockets: Infinity,
     maxFreeSockets: 256,
     maxCachedSessions: 100,
     _sessionCache: { map: [Object], list: [Object] } },
  socketPath: undefined,
  timeout: undefined,
  method: 'POST',
  path: '/rest/comment-likes/latest/projects/AIR/repos/flight-details/pull-requests/37/comments/52544/likes',
  _ended: true,
  _redirectable:
   Writable {
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: true,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: true,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     domain: null,
     _events:
      { response: [Function: handleResponse],
        error: [Function: handleRequestError] },
     _eventsCount: 2,
     _maxListeners: undefined,
     _redirectCount: 0,
     _onNativeResponse: [Function],
     _currentRequest: [Circular],
     _currentUrl: 'https://achenwei:88417338Allah365!!!!!!!!!@bitbucket.corp.com/rest/comment-likes/latest/projects/AIR/repos/flight-details/pull-requests/37/comments/52544/likes' },
  parser: null,
  res:
   IncomingMessage {
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: [Object],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: true,
        endEmitted: true,
        reading: false,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: false,
     domain: null,
     _events:
      { end: [Object],
        data: [Function: handleStreamData],
        error: [Function: handleStreamError] },
     _eventsCount: 3,
     _maxListeners: undefined,
     socket:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: null,
        npnProtocol: undefined,
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 9,
        connecting: false,
        _hadError: false,
        _handle: null,
        _parent: null,
        _host: 'bitbucket.corp.com',
        _readableState: [Object],
        readable: false,
        domain: null,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: false,
        allowHalfOpen: false,
        destroyed: true,
        _bytesDispatched: 379,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: null,
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        read: [Function],
        _consuming: true,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1 },
     connection:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: null,
        npnProtocol: undefined,
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 9,
        connecting: false,
        _hadError: false,
        _handle: null,
        _parent: null,
        _host: 'bitbucket.corp.com',
        _readableState: [Object],
        readable: false,
        domain: null,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: false,
        allowHalfOpen: false,
        destroyed: true,
        _bytesDispatched: 379,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: null,
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        read: [Function],
        _consuming: true,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1 },
     httpVersionMajor: 1,
     httpVersionMinor: 1,
     httpVersion: '1.1',
     complete: true,
     headers:
      { server: 'nginx/1.6.3',
        date: 'Tue, 26 Sep 2017 21:11:06 GMT',
        'content-type': 'text/html;charset=utf-8',
        'content-length': '1135',
        connection: 'close',
        'x-arequestid': '@14B1F4Ix1031x56378361x0',
        'x-asen': 'SEN-6133595',
        'x-auserid': '928',
        'x-ausername': 'achenwei',
        'x-content-type-options': 'nosniff',
        'content-language': 'en' },
     rawHeaders:
      [ 'Server',
        'nginx/1.6.3',
        'Date',
        'Tue, 26 Sep 2017 21:11:06 GMT',
        'Content-Type',
        'text/html;charset=utf-8',
        'Content-Length',
        '1135',
        'Connection',
        'close',
        'X-AREQUESTID',
        '@14B1F4Ix1031x56378361x0',
        'X-ASEN',
        'SEN-6133595',
        'X-AUSERID',
        '928',
        'X-AUSERNAME',
        'achenwei',
        'X-Content-Type-Options',
        'nosniff',
        'Content-Language',
        'en' ],
     trailers: {},
     rawTrailers: [],
     upgrade: false,
     url: '',
     method: null,
     statusCode: 415,
     statusMessage: 'Unsupported Media Type',
     client:
      TLSSocket {
        _tlsOptions: [Object],
        _secureEstablished: true,
        _securePending: false,
        _newSessionPending: false,
        _controlReleased: true,
        _SNICallback: null,
        servername: null,
        npnProtocol: undefined,
        alpnProtocol: false,
        authorized: true,
        authorizationError: null,
        encrypted: true,
        _events: [Object],
        _eventsCount: 9,
        connecting: false,
        _hadError: false,
        _handle: null,
        _parent: null,
        _host: 'bitbucket.corp.com',
        _readableState: [Object],
        readable: false,
        domain: null,
        _maxListeners: undefined,
        _writableState: [Object],
        writable: false,
        allowHalfOpen: false,
        destroyed: true,
        _bytesDispatched: 379,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: undefined,
        _server: null,
        ssl: null,
        _requestCert: true,
        _rejectUnauthorized: true,
        parser: null,
        _httpMessage: [Circular],
        read: [Function],
        _consuming: true,
        _idleNext: null,
        _idlePrev: null,
        _idleTimeout: -1 },
     _consuming: true,
     _dumped: false,
     req: [Circular],
     responseUrl: 'https://achenwei:88417338Allah365!!!!!!!!!@bitbucket.corp.com/rest/comment-likes/latest/projects/AIR/repos/flight-details/pull-requests/37/comments/52544/likes',
     read: [Function] } }