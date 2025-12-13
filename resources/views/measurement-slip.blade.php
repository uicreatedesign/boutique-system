<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Measurement Slip</title>
    <style>
        @page { margin: 0; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: DejaVu Sans, Arial, sans-serif; padding: 15mm; font-size: 11pt; line-height: 1.4; }
        .header { text-align: center; margin-bottom: 15px; border-bottom: 3px double #000; padding-bottom: 10px; }
        .header h1 { font-size: 20pt; margin-bottom: 3px; letter-spacing: 2px; }
        .header p { font-size: 12pt; }
        .info-grid { display: table; width: 100%; margin-bottom: 12px; border-collapse: collapse; }
        .info-row { display: table-row; }
        .info-label { display: table-cell; font-weight: bold; width: 35%; padding: 6px 10px; border: 1px solid #000; background: #f5f5f5; }
        .info-value { display: table-cell; padding: 6px 10px; border: 1px solid #000; }
        .measurements { margin: 15px 0; page-break-inside: avoid; }
        .measurements h3 { background: #000; color: #fff; padding: 8px; text-align: center; margin-bottom: 0; font-size: 12pt; }
        .measurements table { width: 100%; border-collapse: collapse; }
        .measurements th { background: #e8e8e8; padding: 8px; border: 1px solid #000; text-align: left; font-weight: bold; }
        .measurements td { padding: 8px; border: 1px solid #000; }
        .measurements td:last-child { font-weight: bold; font-size: 12pt; }
        .instructions { margin: 12px 0; padding: 10px; border: 2px solid #000; background: #fffacd; page-break-inside: avoid; }
        .instructions strong { display: block; margin-bottom: 5px; font-size: 11pt; }
        .footer { margin-top: 20px; padding-top: 8px; border-top: 1px dashed #000; text-align: center; font-size: 9pt; color: #666; }
        .priority-urgent { background: #ff0000; color: #fff; padding: 3px 10px; font-weight: bold; border-radius: 3px; }
        .priority-normal { background: #4CAF50; color: #fff; padding: 3px 10px; border-radius: 3px; }
        @media print {
            body { padding: 10mm; }
            .no-print { display: none; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>MEASUREMENT SLIP</h1>
        <p>{{ config('app.name') }}</p>
    </div>

    <div class="info-grid">
        <div class="info-row">
            <div class="info-label">Order Number</div>
            <div class="info-value">{{ $order->order_number }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Customer Name</div>
            <div class="info-value">{{ $order->customer->name }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Phone</div>
            <div class="info-value">{{ $order->customer->phone }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Garment Type</div>
            <div class="info-value">{{ $order->garmentType->name }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Fabric</div>
            <div class="info-value">{{ $order->customer_fabric ? 'Customer Provided' : ($order->fabric->name ?? 'N/A') }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Tailor</div>
            <div class="info-value">{{ $order->tailor->name }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Order Date</div>
            <div class="info-value">{{ \Carbon\Carbon::parse($order->order_date)->format('d M Y') }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Delivery Date</div>
            <div class="info-value">{{ \Carbon\Carbon::parse($order->delivery_date)->format('d M Y') }}</div>
        </div>
        <div class="info-row">
            <div class="info-label">Priority</div>
            <div class="info-value"><span class="priority-{{ $order->priority }}">{{ strtoupper($order->priority) }}</span></div>
        </div>
    </div>

    @if($order->measurement)
    <div class="measurements">
        <h3>MEASUREMENTS - {{ strtoupper($order->measurement->measurement_type) }}</h3>
        <table>
            <thead>
                <tr>
                    <th style="width: 50%;">Measurement</th>
                    <th style="width: 50%;">Value</th>
                </tr>
            </thead>
            <tbody>
                @foreach($order->measurement->measurements as $key => $value)
                <tr>
                    <td>{{ ucwords(str_replace('_', ' ', $key)) }}</td>
                    <td><strong>{{ $value }}</strong></td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    @endif

    @if($order->special_instructions)
    <div class="instructions">
        <strong>SPECIAL INSTRUCTIONS:</strong>
        {{ $order->special_instructions }}
    </div>
    @endif

    <div class="footer">
        <p><strong>NOTE:</strong> This slip must be attached with the fabric and sent to the tailor.</p>
        <p>Printed: {{ now()->format('d M Y, h:i A') }}</p>
    </div>
</body>
</html>
