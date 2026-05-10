function init() {
      //地図を表示するdiv要素のidを設定
      const fixedCenter = [35.66019, 139.68498];
      const fixedZoom = 17;
      var map = L.map('mapcontainer',{zoomControl:false});
      //地図の中心とズームレベルを指定
      map.setView(fixedCenter, fixedZoom);
      
      map.locate({
        setView:false,
        watch: false
      })//({setView:true,maxZoom:10});
      
      function onLocationFound(e) {
            var radius = e.accuracy

            L.marker(e.latlng).addTo(map)
                .bindPopup("You are within " + radius + " meters from this point").openPopup();

            L.circle(e.latlng, radius).addTo(map);
            map.setView(fixedCenter, fixedZoom);
      }
  
      function onLocationError(e) {
            alert(e.message);
        }

      map.on('locationerror', onLocationError);

      map.on("locationfound",onLocationFound)
      
      const nodes = []
      class building{
        name
        iti
        edges
        constructor(name,iti){
          this.name = name
          this.iti = iti
          this.edges=[]
          nodes.push(this)
        }
        connect(to,cost){
          this.edges.push({ to, cost })
        }
      }
      
      const node1 = new building("1号館",[35.65997871825521, 139.68489805487255])
      const node2 = new building("2号館",[35.660234213551355, 139.68312287110575])
      const node3 = new building("3号館",[35.661461391241275, 139.6839424971201])
      const node5 = new building("5号館",[35.661088630119664, 139.6843114098606])
      const node7 = new building("7号館",[35.66074597457311, 139.68457431244232])
      const node8 = new building("8号館",[35.66047451913526, 139.6855656742609])
      const node9 = new building("9号館",[35.66082607600139, 139.68543422297006])
      const node10 = new building("10号館",[35.660643622631156, 139.68496866631492])
      const node11 = new building("11号館",[35.660281743951906, 139.68421261567096])
      const node12 = new building("12号館",[35.66028761485472, 139.68352817925256])
      const node13 = new building("13号館",[35.66050566980615, 139.6837089247775])
      const node14 = new building("14号館",[35.660643622631156, 139.6831940738883])
      const node15 = new building("15号館",[35.6612157282075, 139.68282503274793])
      const node16 = new building("16号館",[35.661468850697595, 139.6831104333444])
      const node17 = new building("17号館",[35.661168731204214, 139.6837253561889])
      const node18 = new building("18号館",[35.66108789031145, 139.6850004270608])
      const node20 = new building("情報教育棟",[35.659059055636874, 139.6838582783818])
      const node21 = new building("102号館",[35.65939572740705, 139.68332140421907])
      const node22 = new building("講堂（900番教室）",[35.65983051220302, 139.6837913122945])
      const node23 = new building("アドミニストレーション棟",[35.65915841837309, 139.68531111395922])
      const node25 = new building("数理科学研究科棟",[35.658506588898085, 139.68690522750828])
      const node27 = new building("学生会館",[35.661068330544765, 139.6863984193844])
      const node28 = new building("課外活動施設",[35.66117729250685, 139.68590489295428])
      const node29 = new building("多目的ホール",[35.65987697685469, 139.68773124655414])
      const node30 = new building("駒場図書館",[35.659385938949974, 139.68687585260554])
      const node31 = new building("コミュニケーションプラザ",[35.65969975560993, 139.68722453975727])
      const node32 = new building("KCP南館",[35.65975596712685, 139.68651378467507])
      const node33 = new building("KCP北館",[35.660032006112814, 139.68705547066702])
      const node34 = new building("第一グラウンド",[35.661668313956824, 139.6860832738211])
      const node35 = new building("第二グラウンド",[35.66032511001697, 139.68205557715126])
      const node36 = new building("ラグビー場",[35.662127961444746, 139.6844187106686])
      const node37 = new building("野球場",[35.66224899065279, 139.68307802739906])
      const node38 = new building("テニスコート",[35.660760318652805, 139.68234809978898])
      const node39 = new building("第一体育館",[35.660479602638915, 139.68775278194872])
      const node40 = new building("第二体育館",[35.66059554016132, 139.6871047091843])
      const node41 = new building("弓道場",[35.66244263699791, 139.6849847769128])
      const node42 = new building("駒場博物館",[35.65932987975923, 139.68578478114563])
      const node43 = new building("和館",[35.659512377574586, 139.68786096682942])
      const node44 = new building("保健センター",[35.65933307381391, 139.68375056758327])
      const node49 = new building("正門",[35.6588246668494, 139.6844894905747])
      const node50 = new building("裏門",[35.66137615789705, 139.68763508556853])
      const node51 = new building("北門",[35.66312017491213, 139.68356148601558])
      const node52 = new building("西門",[35.660728747929085, 139.68158566827373])
      
      const nodeeki = new building("",[35.65882, 139.68452])
      const node00129 = new building("",[35.65906, 139.68457])
      const node0038 = new building("",[35.65917, 139.68392])
      const node00133 = new building("",[35.6593, 139.68466])
      const node001 = new building("",[35.65972, 139.68481])
      const node0041 = new building("",[35.65953, 139.68534])
      const node0027 = new building("",[35.6597, 139.68432])
      const node002 = new building("",[35.65976, 139.68404])
      const node0097 = new building("",[35.6599, 139.68408])
      const node0090 = new building("",[35.65996, 139.68388])
      const node0033 = new building("",[35.66005, 139.68343])
      const node0034 = new building("",[35.65957, 139.6833])
      const node0079 = new building("",[35.6595, 139.68354])
      const node0080 = new building("",[35.65932, 139.68347])
      const node0039 = new building("",[35.65925, 139.68374])
      const node0036 = new building("",[35.65939, 139.68408])
      const node0037 = new building("",[35.65941, 139.68398])
      const node0035 = new building("",[35.65945, 139.68381])
      const node0020 = new building("",[35.66039, 139.68509])
      const node0012 = new building("",[35.66025, 139.68559])
      const node0022 = new building("",[35.65975, 139.68542])
      const node007 = new building("",[35.66018, 139.68448])
      const node0011 = new building("",[35.6605, 139.68461])
      const node0021 = new building("",[35.6607, 139.68522])
      const node0055 = new building("",[35.66079, 139.685])
      const node00152 = new building("",[35.66082, 139.68484])
      const node0025 = new building("",[35.66084, 139.68474])
      const node0019 = new building("",[35.66095, 139.68424])
      const node0010 = new building("",[35.66062, 139.68412])
      const node00153 = new building("",[35.66049, 139.68472])
      const node0051 = new building("",[35.66045, 139.68487])
      const node009 = new building("",[35.66031, 139.684])
      const node00181 = new building("",[35.66044, 139.68358])
      const node0061 = new building("",[35.66048, 139.6834])
      const node0062 = new building("",[35.66052, 139.68321])
      const node0063 = new building("",[35.66035, 139.68315])
      const node0072 = new building("",[35.6604, 139.68284])
      const node0073 = new building("",[35.66017, 139.68283])
      const node00182 = new building("",[35.66012, 139.68307])
      const node006 = new building("",[35.66072, 139.68379])
      const node0060 = new building("",[35.66078, 139.68353])
      const node0066 = new building("",[35.66089, 139.68308])
      const node00117 = new building("",[35.661, 139.6827])
      const node0017 = new building("",[35.66105, 139.68241])
      const node00116 = new building("",[35.66126, 139.68247])
      const node00119 = new building("",[35.66148, 139.68256])
      const node0018 = new building("",[35.66177, 139.68269])
      const node00115 = new building("",[35.66165, 139.68312])
      const node00145 = new building("",[35.66115, 139.68335])
      const node00105 = new building("",[35.66104, 139.68391])
      const node0014 = new building("",[35.66131, 139.68396])
      const node00112 = new building("",[35.66155, 139.68351])
      const node00110 = new building("",[35.6614, 139.68352])
      const node0015 = new building("",[35.66135, 139.68376])
      const node00118 = new building("",[35.66126, 139.68343])
      const node0026 = new building("",[35.66121, 139.68432])
      const node00101 = new building("",[35.66108, 139.6848])
      const node0023 = new building("",[35.65958, 139.68617])
      const node00200 = new building("",[35.65985, 139.68586])
      const node00164 = new building("",[35.65945, 139.68661])
      const node00165 = new building("",[35.65982, 139.68627])
      const node0024 = new building("",[35.66007, 139.68636])
      const node00170 = new building("",[35.66033, 139.68646])
      const node00171 = new building("",[35.66022, 139.68694])
      const node00173 = new building("",[35.65999, 139.68777])
      const node00187 = new building("",[35.66073, 139.68764])
      const node00174 = new building("",[35.66066, 139.68793])
      const node00159 = new building("",[35.66063, 139.68556])
      const node00160 = new building("",[35.66059, 139.68573])
      const node00162 = new building("",[35.66084, 139.68582])
      const node00190 = new building("",[35.66099, 139.68626])
      const node00201 = new building("",[35.66106, 139.6859])
      const node00202 = new building("",[35.66016, 139.68719])
      const node00203 = new building("",[35.66042, 139.68729])
      const node00204 = new building("",[35.66038, 139.68751])
      const node00211 = new building("",[35.65966, 139.6859])
      const node00212 = new building("",[35.65971, 139.68568])
      const node00213 = new building("",[35.65931, 139.68518])
      const node00214 = new building("",[35.65955, 139.68493])
      const node00215 = new building("",[35.65963, 139.68456])
      const node00183 = new building("",[35.65948, 139.68522])
      
      function calcDistance(a, b) {
        const dx = a[0] - b[0]
        const dy = a[1] - b[1]
        return Math.sqrt(dx*dx + dy*dy) * 111000
      }

      function connectBoth(a, b) {
        const cost = calcDistance(a.iti, b.iti)
        a.connect(b, cost)
        b.connect(a, cost)
      }

      


      connectBoth(nodeeki,node00129)
      connectBoth(node00129,node0038)
      connectBoth(node00129,node00133)
      connectBoth(node0038,node0039)
      connectBoth(node0039,node0080)
      connectBoth(node0080,node0079)
      connectBoth(node0079,node0034)
      connectBoth(node0079,node0035)
      connectBoth(node0035,node0037)
      connectBoth(node0037,node0036)
      connectBoth(node0037,node002)
      connectBoth(node002,node0027)
      connectBoth(node0027,node0036)
      connectBoth(node002,node0097)
      connectBoth(node0097,node0027)
      connectBoth(node0097,node0090)
      connectBoth(node0090,node0033)
      connectBoth(node0033,node0035)
      connectBoth(node0033,node0034)
      connectBoth(node00133,node0036)
      connectBoth(node0033,node00182)    
      connectBoth(node00182,node0073)
      connectBoth(node0072,node0073)
      connectBoth(node0072,node0063)
      connectBoth(node0062,node0063)
      connectBoth(node0061,node0062)
      connectBoth(node0061,node00181)
      connectBoth(node00181,node009)
      connectBoth(node009,node0090)
      connectBoth(node0010,node009)
      connectBoth(node0060,node0061)
      connectBoth(node006,node0060)
      connectBoth(node006,node0010)  
      connectBoth(node0072,node0066)
      connectBoth(node0066,node0060)
      connectBoth(node0066,node00117)
      connectBoth(node00117,node0017)
      connectBoth(node0017,node00116)
      connectBoth(node00116,node00119)
      connectBoth(node00119,node0018)
      connectBoth(node0018,node00115)
      connectBoth(node00118,node00119)
      connectBoth(node00118,node00145)
      connectBoth(node00145,node00105) 
      connectBoth(node00105,node0019)
      connectBoth(node0019,node0010)
      connectBoth(node00115,node00112)
      connectBoth(node00112,node00110)
      connectBoth(node00110,node00118)
      connectBoth(node00110,node0015)
      connectBoth(node0015,node0014)
      connectBoth(node00105,node0014)
      connectBoth(node0014,node0026)
      connectBoth(node0026,node00101)
      connectBoth(node00101,node0025)
      connectBoth(node0025,node0019)
      connectBoth(node0025,node00152)
      connectBoth(node00152,node00153)
      connectBoth(node0010,node0011)
      connectBoth(node0011,node00153)
      connectBoth(node0011,node007)
      connectBoth(node007,node0027)
      connectBoth(node0041,node0022)
      connectBoth(node0023,node00164)
      connectBoth(node0023,node00165)
      connectBoth(node00165,node0024)
      connectBoth(node0024,node00170)
      connectBoth(node00170,node00171)
      connectBoth(node0012,node0024)
      connectBoth(node0012,node0022)
      connectBoth(node0012,node0020)
      connectBoth(node0020,node0051)
      connectBoth(node0051,node00153)
      connectBoth(node0020,node0021)
      connectBoth(node0021,node0055)
      connectBoth(node0055,node00152)
      connectBoth(node0021,node00159)
      connectBoth(node00159,node00160)
      connectBoth(node00160,node00162)
      connectBoth(node00171,node00202)
      connectBoth(node00202,node00203)
      connectBoth(node00203,node00204)
      connectBoth(node00204,node00187)
      connectBoth(node00187,node00174)
      connectBoth(node00202,node00173)
      connectBoth(node00162,node00201)
      connectBoth(node00201,node00190)
      connectBoth(node001,node00214)
      connectBoth(node00214,node00183)
      connectBoth(node00214,node00133)
      connectBoth(node00133,node00215)
      connectBoth(node00215,node0027)
      connectBoth(node001,node00215)
      connectBoth(node00133,node00213)
      connectBoth(node00213,node00183)
      connectBoth(node0023,node00211)
      connectBoth(node0022,node00212)
      connectBoth(node00212,node00200)
      connectBoth(node00200,node00211)
      connectBoth(node00211,node00212)
      // --- 建物ノード(node1〜node18)の接続設定 ---

      // 1号館・2号館・3号館（中央・西側）
      connectBoth(node1, node001)       // 1号館 -> 正門からの通り
      connectBoth(node2, node00182)     // 2号館 -> 17号館南交差点
      connectBoth(node3, node0015)      // 3号館 -> 15・17号館付近

      // 5号館・7号館（中央・北側）
      connectBoth(node5, node0019)      // 5号館 -> 17号館東交差点
      connectBoth(node7, node0011)      // 7号館 -> 11号館付近
      connectBoth(node7, node0025)      // 7号館 -> 北側通路

      // 8号館・9号館・10号館（東側エリア）
      connectBoth(node8, node00159)     // 8号館 -> 東側通路
      connectBoth(node8, node0012)      // 8号館 -> 24号館方面
      connectBoth(node9, node0021)      // 9号館 -> 10号館東
      connectBoth(node10, node0051)     // 10号館 -> 8号館西
      connectBoth(node10, node0055)     // 10号館 -> 9号館西

      // 11号館・12号館・13号館（中央・西側寄り）
      connectBoth(node11, node007)      // 11号館 -> 1号館北
      connectBoth(node11, node009)      // 11号館 -> 10号館南
      connectBoth(node12, node00181)    // 12号館 -> 13号館付近
      connectBoth(node13, node00181)    // 13号館 -> 12号館付近
      connectBoth(node13, node006)      // 13号館 -> 14号館南

      // 14号館・15号館・16号館（北西エリア）
      connectBoth(node14, node0062)     // 14号館 -> 西門通り
      connectBoth(node15, node00117)     // 15号館 -> 16号館南
      connectBoth(node16, node00115)    // 16号館 -> 37号館南

      // 17号館・18号館（北側・中央エリア）
      connectBoth(node17, node0015)     // 17号館 -> 3号館付近
      connectBoth(node18, node00152)    // 18号館 -> 7号館東
      // --- 追加の接続設定（node20からnode52まで） ---

      // 情報教育棟(node20)・102号館(node21)周辺
      connectBoth(node20, node0038)
      connectBoth(node21, node0034)
      connectBoth(node21, node0080)

      // 講堂・アドミニ・博物館・保健センター周辺
      connectBoth(node22, node0037)
      connectBoth(node23, node0041)
      connectBoth(node23, node00213)
      connectBoth(node42, node00213)
      connectBoth(node42, node0023)
      connectBoth(node44, node0039)
      connectBoth(node44, node0035)

      // 正門(node49)
      connectBoth(node49, nodeeki)
      connectBoth(node49, node00129)

      // 東側：数理(node25)・図書館(node30)・KCP周辺
      connectBoth(node25, node00164)
      connectBoth(node30, node00164)
      connectBoth(node32, node00165)
      connectBoth(node31, node00173)
      connectBoth(node33, node00202)
      connectBoth(node29, node00173)
      connectBoth(node43, node00173)

      // 北東：学生会館(node27)・体育館(node39,40)・裏門(node50)
      connectBoth(node27, node00190)
      connectBoth(node28, node00201)
      connectBoth(node40, node00203)
      connectBoth(node39, node00204)
      connectBoth(node50, node00187)

      // 北側：グラウンド・ラグビー場・野球場・弓道場・北門
      connectBoth(node34, node00201)
      connectBoth(node36, node0026)
      connectBoth(node41, node0026)
      connectBoth(node37, node00115)
      connectBoth(node37, node0018)
      connectBoth(node51, node0018)

      // 西側：第二グラウンド・テニスコート・西門(node52)
      connectBoth(node35, node0073)
      connectBoth(node38, node0072)
      connectBoth(node38, node00117)
      connectBoth(node52, node0073)
      connectBoth(node52, node0017)

      nodes.forEach(n => {
        n.edges.forEach(edge => {
          L.polyline([n.iti, edge.to.iti], {color: 'blue', weight: 1, opacity: 0.2}).addTo(map);
        });
      });

      let currentLine = null;
      let startNode = null; 
      let startMarkerCircle = null; 

      nodes.forEach(n => {
        if (n.name) { // 建物（名前があるノード）のみにクリックイベントを設定
          const marker = L.marker(n.iti).addTo(map)
            .bindTooltip(n.name, {
              permanent: true,
              direction: 'top',
              offset: [0, -10],
              className: 'label'
            });

          marker.on('click', () => {
            if (startNode === null) {
              // --- 1回目のクリック：スタート地点の設定 ---
              startNode = n;
              if (currentLine) map.removeLayer(currentLine);
              if (startMarkerCircle) map.removeLayer(startMarkerCircle);

              startMarkerCircle = L.circleMarker(n.iti, {
                radius: 10, color: 'blue', fillColor: '#3388ff', fillOpacity: 0.5
              }).addTo(map);
              console.log("スタート:", n.name);

            } else if (startNode === n) {
              // スタートをもう一度クリックでキャンセル
              startNode = null;
              if (startMarkerCircle) map.removeLayer(startMarkerCircle);
              console.log("キャンセルしました");

            } else {
              // --- 2回目のクリック：ゴール地点の設定と経路計算 ---
              const goalNode = n;
              const result = main(startNode, goalNode, nodes);
              const path = getPath(result.routes, goalNode);

              if (currentLine) map.removeLayer(currentLine);

              if (path.length > 0 && result.distance !== Number.MAX_VALUE) {
                currentLine = L.polyline(path.map(p => p.iti), {
                  color: "red", weight: 5, opacity: 0.7
                }).addTo(map);

                console.log(startNode.name + "から" + goalNode.name + ": " + Math.round(result.distance) + "m");
                
                // 次の検索のためにリセット（ここを消せば、今のゴールを次のスタートにすることも可能）
                startNode = null;
                if (startMarkerCircle) map.removeLayer(startMarkerCircle);
              } else {
                alert("経路が見つかりません。");
                startNode = null;
                if (startMarkerCircle) map.removeLayer(startMarkerCircle);
              }
            }
          });
        }
      });

      // --- タイル・コントロール設定 ---
      L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
        attribution: "地理院タイル"
      }).addTo(map);

      var gsi = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', { attribution: "地理院タイル" });
      var gsipale = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', { attribution: "地理院タイル" });
      var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: "OpenStreetMap" });

      L.control.layers({ "地理院地図": gsi, "淡色地図": gsipale, "OSM": osm }).addTo(map);
      L.control.scale({ imperial: false }).addTo(map);
      L.control.zoom({ position: 'bottomleft' }).addTo(map);
      gsi.addTo(map);

      // --- ダイクストラ法メインロジック ---
      function main(start, goal, nodes) {
        const visited = new Set();
        const routesFromStart = new Map();
        const routes = new Map();

        for (const n of nodes) {
          routesFromStart.set(n, { distance: n === start ? 0 : Number.MAX_VALUE });
        }

        let current = start;
        while (current != null) {
          visited.add(current);
          for (const edge of current.edges) {
            const newDist = routesFromStart.get(current).distance + edge.cost;
            if (newDist < routesFromStart.get(edge.to).distance) {
              routesFromStart.set(edge.to, { distance: newDist });
              routes.set(edge.to, current);
            }
          }
          let cheapestNodeDistance = Number.MAX_VALUE;
          current = null;
          for (const node of nodes) {
            if (!visited.has(node) && routesFromStart.get(node).distance < cheapestNodeDistance) {
              cheapestNodeDistance = routesFromStart.get(node).distance;
              current = node;
            }
          }
        }
        return { distance: routesFromStart.get(goal).distance, routes: routes };
      }

      function getPath(routes, goal) {
        const path = [];
        let current = goal;
        while (current) {
          path.unshift(current);
          current = routes.get(current);
        }
        return path;
      }
    } // init関数の閉じ
    